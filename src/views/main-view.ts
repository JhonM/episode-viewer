import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import {
  getEpisodesMsg,
  getEpisodeMsg,
  getSerieMsg,
  isLoadingMsg,
  selectCurrentMsg,
} from "../Update";
import { getSerie, getEpisodes, getEpisode } from "../api";
import { SeasonIntroView } from "./season-intro-view";
import { EpisodeView } from "./episode-view";

function initialApiCalls(dispatch: DispatchType, model: Model) {
  document.addEventListener("DOMContentLoaded", () => {
    getSerie()
      .then(async (data) => {
        dispatch(isLoadingMsg(true));
        await data.json().then((body) => dispatch(getSerieMsg(body)));
      })
      .catch((error) => console.error(error, "error"))
      .finally(() => dispatch(isLoadingMsg(false)));

    getEpisodes()
      .then(async (data) => {
        dispatch(isLoadingMsg(true));
        await data.json().then((body) => {
          dispatch(getEpisodesMsg(body));
          const imdbID = body.Episodes[0].imdbID;
          getEpisode(imdbID).then(async (data) => {
            await data.json().then((body) => dispatch(getEpisodeMsg(body)));
          });
        });
      })
      .then(() => dispatch(selectCurrentMsg(model.currentIndex)))
      .catch((error) => console.error(error, "error"))
      .finally(() => dispatch(isLoadingMsg(false)));
  });
}

export function MainView(dispatch: DispatchType, model: Model) {
  initialApiCalls(dispatch, model);

  return h(
    "div",
    { class: "h-[812px] w-full flex" },
    ...[SeasonIntroView(dispatch, model), EpisodeView(dispatch, model)]
  );
}
