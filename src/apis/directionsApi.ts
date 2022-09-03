import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiamVyb2xlZGVzbWEiLCJhIjoiY2w3bGdzY2ozMDNseTNvbXVxaHRxYncyZiJ9.32B35nfbmP6KaU4PC9Admg'
    }
})

export default directionsApi;