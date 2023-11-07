import axios from 'axios';

const AXIOS =  axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_CLIENT_API_KEY}`
    }
});

export default AXIOS;
