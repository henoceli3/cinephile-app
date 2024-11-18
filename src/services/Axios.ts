import axios from "axios";
import { Endpoint, TMDBEndpoint } from "./Endpoint";

export const RqAxiosTMDB = axios.create({
  baseURL: TMDBEndpoint.TMDB,
  headers: {
    "Content-Type": "application/json",
  },
});

export const MyAxios = axios.create({
  baseURL: Endpoint.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
