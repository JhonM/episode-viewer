import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "./types";
import { MainView } from "./views/main-view";

function view(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    {},
    h("pre", {}, ...[MainView(dispatch, model), JSON.stringify(model, null, 2)])
  );
}

export default view;
