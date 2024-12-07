import axios from "axios";

export const BASE_URL =
	process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:5000/api";

export const api = axios.create({
	baseURL: BASE_URL,
});
