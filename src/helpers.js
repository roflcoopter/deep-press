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

export const removeBlur = function () {
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
