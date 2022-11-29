import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import { EpisodeInfoView } from "./episode-info-view";
import { EpisodeCarouselView } from "./episode-carousel-view";

export function SeasonIntroView(dispatch: DispatchType, model: Model) {
  return h(
    "div",
    {
      style: `background-image: url(${model.poster})`,
      class: `flex-1 basis-8/12 bg-cover h-full w-full bg-blend-color-normal flex relative`,
    },
    ...[
      h(
        "div",
        {
          className: "absolute inset h-full w-full bg-gradient-to-t from-black",
        },
        h(
          "div",
          {},
          ...[
            EpisodeInfoView(dispatch, model),
            EpisodeCarouselView(dispatch, model),
          ]
        )
      ),
    ]
  );
}
