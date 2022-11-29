export const MSGS = {
  GET_SERIE: "GET_SERIE",
  SELECT_CURRENT: "SELECT_CURRENT",
} as const;

export type MsgType = typeof MSGS[keyof typeof MSGS];

export type CurrentSeason = {
  title: string;
  description: string;
  name: string;
};

export type Episode = {
  title: string;
  description: string;
  poster: string;
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
  imdbID: string;
  type: string;
  totalSeasons: string;
  response: string;
  // title: string;
  // currentSeason: CurrentSeason;
  episodes: Episode[];
  // rating: number;
  // poster: string;
  isLoading: boolean;
};

export type ActionType =
  | { type: "GET_SERIE"; serie: Model }
  | { type: "SELECT_CURRENT" };

export type DispatchType = (action: ActionType) => void;
