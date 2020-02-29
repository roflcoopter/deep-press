export const setModalBehaviour = function (enable_clicks, retry) {
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

export const getView = function () {
  return document
    .querySelector("body > home-assistant")
    .shadowRoot.querySelector("home-assistant-main")
    .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
    .shadowRoot.querySelector("hui-root")
    .shadowRoot.querySelector("#view > hui-view") ?
    document
      .querySelector("body > home-assistant")
      .shadowRoot.querySelector("home-assistant-main")
      .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
      .shadowRoot.querySelector("hui-root")
      .shadowRoot.querySelector("#view > hui-view") :
    document
      .querySelector("body > home-assistant")
      .shadowRoot.querySelector("home-assistant-main")
      .shadowRoot.querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace")
      .shadowRoot.querySelector("hui-root")
      .shadowRoot.querySelector("#view > hui-panel-view");
}

export const removeBlur = function () {
  try {
    getView().style.webkitFilter = 'blur(0px)';
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err
    }
  }
};

export const setIntervalNTimes = (fn, delay, times) => {
  if (!times) return;

  setTimeout(() => {
    fn();
    setIntervalNTimes(fn, delay, times - 1)
  }, delay);
};


export const scaleElement = function (config, element, scale) {
  if (config.animations) {
    element.style.transform = "scale(" + scale + ")";
  };
};
