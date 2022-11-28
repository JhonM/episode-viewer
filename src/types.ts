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
  number: number;
  image: string;
  title: string;
  description: string;
  poster: string;
  releasDate: Date;
};

export type Model = {
  serie: string;
  currentSeason: CurrentSeason;
  episodes: Episode[];
  rating: number;
  poster: string;
};

export type ActionType =
  | { type: "GET_SERIE"; serie: string }
  | { type: "SELECT_CURRENT" };

export type DispatchType = (action: ActionType) => void;
