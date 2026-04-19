import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchProviders = (category) => API.get(`/providers/${category}`);
export const fetchProviderById = (id) => API.get(`/providers/details/${id}`);
