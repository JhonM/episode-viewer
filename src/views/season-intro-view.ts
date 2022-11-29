import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";

export function SeasonIntroView(dispatch: DispatchType, model: Model) {
  return h("div", { class: "flex-1 basis-9/12" }, "Season intro view");
}
