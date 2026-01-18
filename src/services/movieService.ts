import axios from "axios";
import type { FetchMovieResponse } from "../types/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(query: string) {
  const baseURL = "https://api.themoviedb.org/3";
  const endPoint = "/search/movie";
  const url = baseURL + endPoint;

  const params = {
    query,
  };

  const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  };

  const res = await axios.get<FetchMovieResponse>(url, { headers, params });
  return res.data;
}
