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
  imdbID: "",
  type: "",
  totalSeasons: "",
  response: "",
  isLoading: false,
  // currentSeason: {
  //   title: "Some Title",
  //   description: "Description",
  //   name: "name",
  // },
  // episodes: [
  // {
  //   number: 1,
  //   image: "skldfj",
  //   title: "slfkj",
  //   description: "sjdlf",
  //   poster: "sdjklf",
  //   releasDate: new Date(),
  // },
  // ],
  // rating: 3,
};

export default initModel;
