import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import {
  getEpisodesMsg,
  getSerieMsg,
  isLoadingMsg,
  selectCurrentMsg,
} from "../Update";
import { getSerie, getEpisodes } from "../api";
import { SeasonIntroView } from "./season-intro-view";
import { EpisodeView } from "./episode-view";

export function MainView(dispatch: DispatchType, model: Model) {
  document.addEventListener("DOMContentLoaded", () => {
    getSerie()
      .then(async (data) => {
        dispatch(isLoadingMsg(true));
        await data.json().then((body) => dispatch(getSerieMsg(body)));
      })
      .then(() => dispatch(selectCurrentMsg(0)))
      .catch((error) => console.error(error, "error"))
      .finally(() => dispatch(isLoadingMsg(false)));
    getEpisodes()
      .then(async (data) => {
        dispatch(isLoadingMsg(true));
        await data.json().then((body) => dispatch(getEpisodesMsg(body)));
      })
      .then(() => dispatch(selectCurrentMsg(0)))
      .catch((error) => console.error(error, "error"))
      .finally(() => {
        dispatch(isLoadingMsg(false));
      });
  });

  return h(
    "div",
    { class: "h-[812px] w-full flex" },
    ...[SeasonIntroView(dispatch, model), EpisodeView(dispatch, model)]
  );
}
