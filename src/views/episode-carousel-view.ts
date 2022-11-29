import * as R from "ramda";
import { h } from "@jhonm/blanc-vdom/src";
import type { Episode, DispatchType, Model } from "../types";
import { Carousel } from "../components/Carousel";

function itemView(dispatch, episode: Episode) {
  return h(
    "div",
    {
      class: "snap-center min-w-[200px] max-w-[200px]",
    },
    h(
      "div",
      {},
      h(
        "div",
        {
          class: "bg-red-100 p-4 transition-300-all shadow-4-hover",
        },
        episode.title
      )
    )
  );
}

function itemsView(dispatch: DispatchType, episodes: Model["episodes"]) {
  const row = R.map(R.partial(itemView, [dispatch]), episodes);
  return row;
}

function buttonView(icon, onclick: () => void) {
  return h("button", { onclick }, icon);
}

export function EpisodeCarouselView(dispatch: DispatchType, model: Model) {
  const carousel = new Carousel(model.episodes, "carousel-one");

  return h(
    "div",
    {
      class: "overflow-hidden display-grid lg:max-w-584 mb-4",
    },
    h(
      "div",
      {
        id: "carousel-one",
        class:
          "pl-16 flex overflow-x-auto justify-start space-x-12 no-scrollbar overflow-y-hidden snap-x",
      },
      ...itemsView(dispatch, model.episodes)
    ),
    h(
      "div",
      { class: "flex justify-end" },
      ...[
        buttonView("<", function () {
          carousel.previousItem();
        }),
        buttonView(">", function () {
          carousel.nextItem();
        }),
      ]
    )
  );
}
