import {
  setModalBehaviour,
  removeBlur,
} from './helpers'

import { lovelace } from "card-tools/src/hass";
import { fireEvent } from "card-tools/src/event";

import DeepPress from './deep-press'

// Wait for lovelace to be defined before initializing
const waitForLovelace = () => {
  if (lovelace()) {
    initialize()
  } else {
    setTimeout(waitForLovelace, 250);
  }
};

const initialize = () => {
  // We dont require card-tools, but we have to wait for it since we use the same
  // method of patching the firstUpdated function
  customElements.whenDefined('card-tools').then(() => {
    customElements.whenDefined('ha-card').then(() => {
      const HaCard = customElements.get('ha-card');

      // Set global config
      const defaults = {
        enable_unsupported: false,
        animations: true,
      };
      var deep_press_config = Object.assign({}, defaults, lovelace().config.deep_press);

      if ('ontouchforcechange' in document === false && deep_press_config.enable_unsupported == false) {
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

      function addCover(deep_press_config, card_config) {
        // Check if cover is already applied
        if (this.querySelector(":scope >#deep-press-cover"))
          return;

        // Create a cover which captures the deep press
        var cover = document.createElement("div");
        cover.setAttribute("id", "deep-press-cover");
        cover.setAttribute(
          "style",
          "position: absolute; top:0; left:0; width:100%; height: 100%; overflow: visible;"
        );
        this.appendChild(cover);

        var deepPress = new DeepPress(cover, this, deep_press_config, card_config);
        deepPress.init();
      };

      var cached_update = HaCard.prototype.firstUpdated;
      HaCard.prototype.firstUpdated = function (e) {
        // Call the original firstUpdated method, then create cover element
        cached_update.apply(this, e);
        const card_config = findConfig(this);
        if (card_config && card_config.deep_press && card_config.hold_action) {
          addCover.call(this, deep_press_config, card_config);
        };
      };

      fireEvent('ll-rebuild', {});
    });
  });
};

waitForLovelace()

console.info(
  `%cdeep-press\n%cVersion: 2.1.1`,
  "color: green; font-weight: bold;",
  ""
);
