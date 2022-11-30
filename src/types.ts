export const MSGS = {
  GET_SERIE: "GET_SERIE",
  GET_EPISODES: "GET_EPISODES",
  SELECT_CURRENT: "SELECT_CURRENT",
  IS_LOADING: "IS_LOADING",
} as const;

export type MsgType = typeof MSGS[keyof typeof MSGS];

export type CurrentSeason = {
  title: string;
  description: string;
  name: string;
};

export type Episode = {
  episode: string;
  released: string;
  title: string;
  imdbid: string;
  imdbRating: string;
};

export type Model = {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: [
    {
      source: string;
      value: string;
    }
  ];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbid: string;
  type: string;
  totalSeasons: string;
  response: string;
  currentEpisode: Episode;
  episodes: Episode[];
  isLoading: boolean;
};

export type ActionType =
  | { type: "GET_SERIE"; serie: Model }
  | { type: "GET_EPISODES"; episodes: Model["episodes"] }
  | { type: "SELECT_CURRENT"; index: number }
  | { type: "IS_LOADING"; isLoading: Model["isLoading"] };

export type DispatchType = (action: ActionType) => void;
