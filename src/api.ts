import * as dotenv from "dotenv";
dotenv.config();

const serieId = "tt6487482";

export async function getSerie() {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${serieId}`
  );

  return results;
}

export async function getEpisodes() {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${serieId}&Season=1`
  );

  return results;
}

export async function getEpisode(episodeId: string) {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${episodeId}`
  );

  return results;
}
