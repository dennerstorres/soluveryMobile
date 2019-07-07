import axios from 'axios';

const api = axios.create({
    baseURL: 'https://soluvery.herokuapp.com'
});

export default api;