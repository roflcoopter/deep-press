import {
  handleClick
} from 'custom-card-helpers';

import Pressure from 'pressure';

customElements.whenDefined('card-tools').then(() => {
  let cardTools = customElements.get('card-tools');
  const HaCard = customElements.get('ha-card');

  // Set global config
  const defaults = {
    enable_unsupported: false,
  };
  var config = Object.assign({}, defaults, cardTools.lovelace.config.deep_press);

  if ('ontouchforcechange' in document === false && config.enable_unsupported == false) {
    return; // disable if device doesnt support force-touch
  }

  const setModalBehaviour = function (enable_clicks, retry) {
    var modal = document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog");
    if (modal) {
      if (enable_clicks) {
        modal.noCancelOnOutsideClick = false;
        modal.style.pointerEvents = "all";
      } else {
        modal.noCancelOnOutsideClick = true;
        modal.style.pointerEvents = "none";
      }
    } else {
      if (retry) { //retry once, needed for popup cards that load slowly
        setTimeout(function () {
          setModalBehaviour(enable_clicks, false);
        }, 100);
      }
    }
  };

  const removeBlur = function () {
    try {
      document.querySelector("body > home-assistant")
        .shadowRoot.querySelector("home-assistant-main")
        .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
        .shadowRoot.querySelector("hui-root")
        .shadowRoot.querySelector("#view > hui-view")
        .style.webkitFilter = 'blur(0px)';
    } catch (err) {
      if (!(err instanceof TypeError)) {
        throw err
      }
    }
  };

  [
    'touchend',
    'mouseup',
  ].forEach((ev) => {
    document.addEventListener(ev,
      () => {
        removeBlur();
        setTimeout(function () {
          setModalBehaviour(true, false);
        }, 100);
      }
    );
  });

  const simulateClick = function (targetNode) {
    function triggerEvent(targetNode, eventType) {
      var clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent(eventType, true, true);
      targetNode.dispatchEvent(clickEvent);
    }
    [
      'touchstart',
      'touchend',
      'click'
    ].forEach(function (eventType) {
      triggerEvent(targetNode, eventType);
    });
  };

  const startEvent = function (root, event) {
    /* We have to stop propagation to prevent the underlying cards actions to trigger.
       HOWEVER, if we stop propagation, things like swiper-card doesnt work. 
       To solve this i redispatch the same even on the cards parent. Superhacky.
    */
    event.stopPropagation();
    try {
      root.parentElement.dispatchEvent(new event.constructor(event.type, event));
    } catch (TypeError) {
      root.getRootNode().host.dispatchEvent(new event.constructor(event.type, event));
    }

  };

  function _start() {
    this.cancel = false;
    this.event_over = false;
    this.hold = false;
    this.deep_press = false;
    this.view = document
      .querySelector("body > home-assistant")
      .shadowRoot.querySelector("home-assistant-main")
      .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
      .shadowRoot.querySelector("hui-root")
      .shadowRoot.querySelector("#view > hui-view");
  };

  function _change(force) {
    if (this.cancel || this.deep_press) {
      return
    }
    if (force > 0.2) {
      this.view.style.webkitFilter = 'blur(' + Pressure.map(force, 0.2, 0.5, 0, 10) + 'px)';
      this.hold = true;
    };
  };

  function _deep(root) {
    if (this.cancel) {
      return
    }
    if (!this.deep_press) {
      this.deep_press = true;
      handleClick(root, cardTools.hass, root.config, true, false);
      setModalBehaviour(false, true);
    };
  };

  function _end(root) {
    if (this.cancel) {
      return
    }
    this.view.style.webkitFilter = 'blur(0px)';
    // If hold wasnt detected, simulate a click on the element to trigger default actions of the underlying card
    if (!this.hold && !this.event_over) {
      simulateClick(root);
    };
    this.event_over = true;
    this.hold = false;
    this.deep_press = false;
  };

  function _cancel(event) {
    this.cancel = true;
    try {
      this.view.style.webkitFilter = 'blur(0px)'; // Undefined at start
    } catch (TypeError) {
    }
  }

  const addCover = function (root, config) {
    // Check if cover is already applied
    if (root.querySelector(":scope >#deep-press-cover"))
      return;

    root.config = config
    // Create a cover which captures the deep press
    root.cover = document.createElement("div");
    root.cover.setAttribute("id", "deep-press-cover");
    root.cover.setAttribute(
      "style",
      "position:absolute; top:0; left:0; width:100%; height: 100%;"
    );
    root.appendChild(root.cover);

    // Start events
    [
      'touchstart',
      'mousedown',
      'click'
    ].forEach(function (eventName) {
      root.cover.addEventListener(eventName, function (event) { startEvent.call(this, root, event); }, { passive: true });
    });

    // End events
    [
      'touchend',
      'mouseup'
    ].forEach(function (eventName) {
      root.cover.addEventListener(eventName, function (event) { _end.call(this, root, event); }, { passive: true });
    });

    // Canceling events
    [
      'touchcancel',
      'mouseout',
      'touchmove',
      'mousewheel',
      'wheel',
      'scroll'
    ].forEach(function (eventName) {
      root.cover.addEventListener(eventName, function (event) { _cancel.call(this, event); }, { passive: true });
    });

    Pressure.set(root.cover, {
      start: function (event) {
        _start.call(this);
      },

      change: function (force, event) {
        _change.call(this, force);
      },

      startDeepPress: function (event) {
        _deep.call(this, root);
      },

      end: function () {
        _end.call(this, root)
        this.view.style.webkitFilter = 'blur(0px)';
      },
    });
  }

  const findConfig = function (node) {
    if (node.config)
      return node.config;
    if (node._config)
      return node._config;
    if (node.host)
      return findConfig(node.host);
    if (node.parentElement)
      return findConfig(node.parentElement);
    if (node.parentNode)
      return findConfig(node.parentNode);
    return null;
  };

  var cached_update = HaCard.prototype.update;
  HaCard.prototype.update = function (e) {
    // Call the original update method, then create cover element
    cached_update.apply(this, e);
    const card_config = findConfig(this);
    if (card_config && card_config.deep_press && card_config.hold_action) {
      addCover(this, card_config);
    }
  };
});

console.info(
  `%cdeep-press\n%cVersion: 1.2.4`,
  "color: green; font-weight: bold;",
  ""
);
