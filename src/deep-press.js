import {
  setModalBehaviour,
  removeBlur,
  getView,
  scaleElement
} from './helpers'

import {
  handleClick
} from 'custom-card-helpers';

import Pressure from 'pressure';

export default class DeepPress {
  constructor(cover, root, deep_press_config, config) {
    this.cover = cover;
    this.root = root;
    this.deep_press_config = deep_press_config;
    this.config = config;
    this.cover.deep_press_config = deep_press_config;
    this.cover.config = config;

    this._upEvent = this.upEvent.bind(this);
  }

  downEvent(event) {
    // Listen for release events
    [
      'touchend',
      'mouseup',
      'click'
    ].forEach(function (eventName) {
      this.cover.addEventListener(eventName, this._upEvent, { passive: true });
    }, this);

    this.down_event = event; // Store event. Used later to simulate a click
    /* We have to stop propagation to prevent the underlying cards actions to trigger.
       HOWEVER, if we stop propagation, things like swiper-card doesnt work. 
       To solve this i redispatch the same even on the cards parent. Superhacky.
    */
    event.stopPropagation();
    try {
      this.root.parentElement.dispatchEvent(new event.constructor(event.type, event));
    } catch (TypeError) {
      this.root.getRootNode().host.dispatchEvent(new event.constructor(event.type, event));
    }
  }

  upEvent(event) {
    scaleElement(this.deep_press_config, this.root, 1);
    this.cover.removeEventListener(event.type, this._upEvent, { passive: true });

    if (this.cover.cancel || this.cover.hold) {
      event.stopPropagation();
      try {
        this.root.parentElement.dispatchEvent(new event.constructor(event.type, event));
      } catch (TypeError) {
        this.root.getRootNode().host.dispatchEvent(new event.constructor(event.type, event));
      }
      return;
    }
    if (event.type != 'click') {
      this.root.dispatchEvent(new event.constructor(this.down_event.type, this.down_event));
    };
    this.root.dispatchEvent(new event.constructor(event.type, event));
    removeBlur();
  }

  cancelEvent(event) {
    this.cover.cancel = true;
    scaleElement(this.deep_press_config, this.root, 1);
    removeBlur();
  }

  init() {
    // Down events
    [
      'touchstart',
      'mousedown'
    ].forEach(function (eventName) {
      this.cover.addEventListener(eventName, this.downEvent.bind(this), { passive: true });
    }, this);

    // Canceling events
    [
      'touchcancel',
      'mouseout',
      'touchmove',
      'mousewheel',
      'wheel',
      'scroll'
    ].forEach(function (eventName) {
      this.cover.addEventListener(eventName, this.cancelEvent.bind(this), { passive: true });
    }, this);

    Pressure.set(this.cover, {
      start: function (event) {
        this.cancel = false;
        this.event_over = false;
        this.hold = false;
        this.deep_press = false;
        this.view = getView();
      },

      change: function (force, event) {
        if (this.cancel || this.deep_press) {
          return
        }
        if (force > 0.2) {
          this.view.style.webkitFilter = 'blur(' + Pressure.map(force, 0.2, 0.5, 0, 10) + 'px)';
          scaleElement(this.deep_press_config, this.parentElement, Pressure.map(force, 0.2, 0.5, 1, 0.5));
          this.hold = true;
        };
      },

      startDeepPress: function (event) {
        if (this.cancel) {
          return
        }
        if (!this.deep_press) {
          this.deep_press = true;
          scaleElement(this.deep_press_config, this.parentElement, 1);
          handleClick(this.parentElement, cardTools.hass, this.config, true, false);
          setModalBehaviour(false, true);
          removeBlur();
        };
      },

      end: function () {
        scaleElement(this.deep_press_config, this.parentElement, 1);
        removeBlur();
      },
    });
  }
};
