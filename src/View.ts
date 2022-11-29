import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "./types";
import { MainView } from "./views/main-view";

function view(dispatch: DispatchType, model: Model) {
  //TODO: remove this
  if (model.title) {
    console.log(JSON.stringify(model, null, 2));
  }

  return h("div", { class: "container mx-auto" }, MainView(dispatch, model));
}

export default view;
