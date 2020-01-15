import {
  setModalBehaviour,
  removeBlur
} from './helpers'

import DeepPress from './deep-press'

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

  function addCover(config) {
    // Check if cover is already applied
    if (this.querySelector(":scope >#deep-press-cover"))
      return;

    // Create a cover which captures the deep press
    var cover = document.createElement("div");
    cover.setAttribute("id", "deep-press-cover");
    cover.setAttribute(
      "style",
      "position:absolute; top:0; left:0; width:100%; height: 100%;"
    );
    this.appendChild(cover);

    DeepPress.init.call(cover, this, config);
  };

  var cached_update = HaCard.prototype.update;
  HaCard.prototype.update = function (e) {
    // Call the original update method, then create cover element
    cached_update.apply(this, e);
    const card_config = findConfig(this);
    if (card_config && card_config.deep_press && card_config.hold_action) {
      addCover.call(this, card_config);
    };
  };
});

console.info(
  `%cdeep-press\n%cVersion: 1.2.5`,
  "color: green; font-weight: bold;",
  ""
);
