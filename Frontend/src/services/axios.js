import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_SSL == "true" ? 'https://' : 'http://'}${import.meta.env.VITE_BACKEND_HOST}`,
    withCredentials: true,
});

export default instance;
