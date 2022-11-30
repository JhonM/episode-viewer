import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";

export function EpisodeView(dispatch: DispatchType, model: Model) {
  if (model.currentEpisode === undefined) {
    return h("div", {});
  }

  return h(
    "div",
    { class: "flex-1 basis-4/12" },
    ...[model.currentEpisode.title]
  );
}
