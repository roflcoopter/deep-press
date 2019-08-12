import {
  handleClick, applyThemesOnElement,
} from 'custom-card-helpers';

import Pressure from 'pressure';

customElements.whenDefined('ha-card').then(() => {
    [
      'touchend',
      'mouseup',
    ].forEach((ev) => {
      document.addEventListener(
        ev,
        () => {
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

          setTimeout(function () {
            var modal = document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog");
            if (modal) {
              modal.noCancelOnOutsideClick = false;
              modal.style.pointerEvents = "all";
            }
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
    if(root.querySelector(":scope >#deep-press-cover") ||
      (root.querySelector("#overlay") && root.querySelector("#overlay").querySelector(":scope >#deep-press-cover")))
      return

    // If root is a button-card with lock: true we need to add the cover as a child to the overlay
    const coverParent = root.querySelector("#overlay") ? root.querySelector("#overlay") : root;
    // Create a cover which captures the deep press
    coverParent.cover = document.createElement("div");
    coverParent.cover.setAttribute("id", "deep-press-cover");
    coverParent.cover.onclick = function(event) { if (this.hold) { event.stopPropagation(); } }; // Catch click method so we can stop propagation
    coverParent.cover.setAttribute(
      "style",
      "position:absolute; top:0; left:0; width:100%; height: 100%; z-index:1000;"
    );
    coverParent.appendChild(coverParent.cover);
    Pressure.set(coverParent.cover, {
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
          handleClick(this, null, config, true, false);
          document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog").noCancelOnOutsideClick = true;
          document.querySelector("body > home-assistant").shadowRoot.querySelector("ha-more-info-dialog").style.pointerEvents = "none";
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
