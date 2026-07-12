import type { MoviesResponse } from "../types/movie";
import axios from "axios";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
export async function fetchMovies(query: string): Promise<MoviesResponse> {
  const { data } = await axios.get<MoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  return data;
}
