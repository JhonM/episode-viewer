import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import { getSerie as updateSerie } from "../Update";
import { getSerie } from "../api";
import { SeasonIntroView } from "./season-intro-view";
import { EpisodeView } from "./episode-view";

export function MainView(dispatch: DispatchType, model: Model) {
  document.addEventListener("DOMContentLoaded", () => {
    getSerie()
      .then((data) => data.json().then((body) => dispatch(updateSerie(body))))
      .catch((error) => console.log(error, "error"));
    // .finally(() => console.log("finally"));
  });

  return h(
    "div",
    { class: "h-[812px] w-full bg-stone-200 flex" },
    ...[SeasonIntroView(dispatch, model), EpisodeView(dispatch, model)]
  );
}
