import axios from 'axios';


const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoiamVyb2xlZGVzbWEiLCJhIjoiY2w3bGdzY2ozMDNseTNvbXVxaHRxYncyZiJ9.32B35nfbmP6KaU4PC9Admg'
    }
})

export default searchApi;