import * as dotenv from "dotenv";
dotenv.config();

export async function getSerie() {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=tt2294189`
  );

  return results;
}

export async function getSeasons(serieId: string) {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=tt2294189`
  );
}
