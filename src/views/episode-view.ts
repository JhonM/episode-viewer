import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";

export function EpisodeView(dispatch: DispatchType, model: Model) {
  return h("div", { class: "flex-1 basis-3/12" }, "Episode view");
}
