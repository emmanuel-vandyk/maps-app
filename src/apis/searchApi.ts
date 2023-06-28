import axios from "axios";

const ACCESS_TOKEN = 'pk.eyJ1IjoiZW1tYXZkOTgiLCJhIjoiY2xqNXppemhlMDI0ODNocG1uMW43cThlZCJ9.Y4fsNyDh6h4KFmUSlKSXZg';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: ACCESS_TOKEN
    }
})

export default searchApi;