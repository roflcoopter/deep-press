import {
  handleClick
} from 'custom-card-helpers';

import Pressure from 'pressure';

customElements.whenDefined('card-tools').then(() => {
  let cardTools = customElements.get('card-tools');

  // Set global config
  const enableUnsupported = (cardTools.lovelace.config.deep_press.enable_unsupported == null) ? false : cardTools.lovelace.config.deep_press.enable_unsupported;

  if('ontouchforcechange' in document === false && enableUnsupported == false){
    return; // disable if device doesnt support force-touch
  }

  const setModalBehaviour = function(enable_clicks) {
    var modal = document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog");
    if (modal) {
      if (enable_clicks) {
        modal.noCancelOnOutsideClick = false;
        modal.style.pointerEvents = "all";
      } else {
        modal.noCancelOnOutsideClick = true;
        modal.style.pointerEvents = "none";
      }
    }
  };

  const removeBlur = function() {
    try {
      document.querySelector("body > home-assistant")
              .shadowRoot.querySelector("home-assistant-main")
              .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
              .shadowRoot.querySelector("hui-root")
              .shadowRoot.querySelector("#view > hui-view")
              .style.webkitFilter= 'blur(0px)';
    } catch(err) {
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
        setTimeout(function() {
          setModalBehaviour(true);
        }, 100);
      },
      { passive: true },
    );
  });

  const HaCard = customElements.get('ha-card');

  const findConfig = function(node) {
    if(node.config)
      return node.config;
    if(node._config)
      return node._config;
    if(node.host)
      return findConfig(node.host);
    if(node.parentElement)
      return findConfig(node.parentElement);
    if(node.parentNode)
      return findConfig(node.parentNode);
    return null;
  };

  const addCover = function(root, config) {
    // Check if cover is already applied
    if(root.querySelector(":scope >#deep-press-cover"))
      return;

    // Create a cover which captures the deep press
    root.cover = document.createElement("div");
    root.cover.setAttribute("id", "deep-press-cover");
    root.cover.onclick = function(event) { if (this.hold) { event.stopPropagation(); } }; // Catch click method so we can stop propagation
    root.cover.onmouseup = function(event) { if (this.hold) { event.stopPropagation(); } }; // Catch click method so we can stop propagation
    root.cover.ontouchend = function(event) { if (this.hold) { event.stopPropagation(); } }; // Catch click method so we can stop propagation
    root.cover.onmousedown = function(event) { event.stopPropagation(); }; // Catch click method so we can stop propagation
    root.cover.ontouchstart = function(event) { event.stopPropagation(); }; // Catch click method so we can stop propagation
    root.cover.setAttribute(
      "style",
      "position:absolute; top:0; left:0; width:100%; height: 100%;"
    );
    root.appendChild(root.cover);

    Pressure.set(root.cover, {
      start: function(event){
        this.deep_press = false;
        this.view = document
                      .querySelector("body > home-assistant")
                      .shadowRoot.querySelector("home-assistant-main")
                      .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
                      .shadowRoot.querySelector("hui-root")
                      .shadowRoot.querySelector("#view > hui-view");
      },

      change: function(force, event){
        if (force > 0.2) {
          this.view.style.webkitFilter = 'blur(' + Pressure.map(force, 0.2, 0.5, 0, 10) + 'px)';
          this.hold = true;
        }
      },

      startDeepPress: function(event){
        if (!this.deep_press) {
          this.deep_press = true;
          handleClick(this, root.hass, config, true, false);
          setModalBehaviour(false);
        }
      },

      end: function(){
        this.view.style.webkitFilter= 'blur(0px)';
        this.hold = false;
      },
    });
  }

  var cached_update = HaCard.prototype.update;
  HaCard.prototype.update = function(e){
    // Call the original update method, then create cover element
    cached_update.apply(this, e);
    const config = findConfig(this);
    if(config && config.deep_press) {
      addCover(this, config);
    }
  };
});
