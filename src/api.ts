import * as dotenv from "dotenv";
dotenv.config();

export async function getSerie() {
  const results = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${process.env.SERIE_ID}`
  );

  return results;
}
