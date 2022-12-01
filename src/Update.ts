import type { Episode, ActionType, Model } from "./types";
import { MSGS } from "./types";
import { mapApiToModel } from "./helpers";

export function getSerieMsg(serie: Model) {
  return {
    type: MSGS.GET_SERIE,
    serie,
  };
}

export function getEpisodesMsg(episodes: Model["episodes"]) {
  return {
    type: MSGS.GET_EPISODES,
    episodes,
  };
}

export function getEpisodeMsg(episode: Episode) {
  return {
    type: MSGS.GET_EPISODE,
    episode,
  };
}

export function isLoadingMsg(isLoading: boolean) {
  return {
    type: MSGS.IS_LOADING,
    isLoading,
  };
}

export function selectCurrentMsg(index: string) {
  return {
    type: MSGS.SELECT_CURRENT,
    index,
  };
}

function update(msg: ActionType, model: Model): Model {
  switch (msg.type) {
    case MSGS.GET_SERIE:
      const serieReponseToModel = mapApiToModel(Object.entries(msg.serie));

      return { ...model, ...serieReponseToModel };
    case MSGS.GET_EPISODES:
      const { episodes: episodesResponseToArray } = mapApiToModel(
        Object.entries(msg.episodes)
      );
      const episodesItemsToArray = Object.entries(episodesResponseToArray);
      const episodeItemToModel = episodesItemsToArray.reduce((acc, arr) => {
        const toModel = mapApiToModel(Object.entries(arr[1]));
        //TODO: Fix typing
        acc.push(toModel);
        return acc;
      }, []);

      return {
        ...model,
        episodes: [...episodeItemToModel],
      };
    case MSGS.GET_EPISODE:
      const currentEpisodeToModel = mapApiToModel(Object.entries(msg.episode));
      //TODO: Fix typing
      return { ...model, currentEpisode: currentEpisodeToModel };
    case MSGS.SELECT_CURRENT:
      const { index } = msg;
      const currentEpisode = model.episodes.find(
        (episode) => episode.imdbid === index
      );
      console.log(currentEpisode);
      console.log(model.episodes[0]);
      return { ...model, currentEpisode: currentEpisode };
    case MSGS.IS_LOADING:
      const { isLoading } = msg;
      return { ...model, isLoading };
    default:
      return model;
  }
}

export default update;
