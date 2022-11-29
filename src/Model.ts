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
  episodes: [
    {
      title: "Episode 1",
      description: "Description Episode 1",
      poster: "http://image.url/episode-1",
    },
    {
      title: "Episode 2",
      description: "Description Episode 2",
      poster: "http://image.url/episode-2",
    },
    {
      title: "Episode 3",
      description: "Description Episode 3",
      poster: "http://image.url/episode-3",
    },
    {
      title: "Episode 4",
      description: "Description Episode 4",
      poster: "http://image.url/episode-4",
    },
    {
      title: "Episode 5",
      description: "Description Episode 5",
      poster: "http://image.url/episode-5",
    },
    {
      title: "Episode 6",
      description: "Description Episode 6",
      poster: "http://image.url/episode-6",
    },
    {
      title: "Episode 7",
      description: "Description Episode 7",
      poster: "http://image.url/episode-7",
    },
  ],
  // rating: 3,
};

export default initModel;
