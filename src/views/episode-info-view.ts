import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";

export function EpisodeInfoView(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    { class: "text-white z-10 max-w-md h-auto space-y-2" },
    ...[
      h("div", {}, "Season 1"),
      h("div", {}, model.title),
      h("p", {}, model.plot),
    ]
  );
}
