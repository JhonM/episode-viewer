import type { Model } from "./types";

const initModel: Model = {
  title: "",
  year: "",
  rated: "",
  released: "",
  runtime: "",
  genre: "",
  director: "",
  writer: "",
  actors: "",
  plot: "",
  language: "",
  country: "",
  awards: "",
  poster: "",
  ratings: [
    {
      source: "",
      value: "",
    },
  ],
  metascore: "",
  imdbRating: "",
  imdbVotes: "",
  imdbid: "",
  type: "",
  totalSeasons: "",
  response: "",
  isLoading: false,
  // currentSeason: {
  //   title: "Some Title",
  //   description: "Description",
  //   name: "name",
  // },
  episodes: [],
};

export default initModel;
