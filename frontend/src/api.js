import axios from "axios";

const RENDER_URL = "https://appointo-backend-api.onrender.com/api";

const API = axios.create({ baseURL: RENDER_URL });

export const fetchProviders = (category) => API.get(`/providers/${category}`);
export const fetchProviderById = (id) => API.get(`/providers/details/${id}`);

export default API;
