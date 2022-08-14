import axios from "axios";

const Api = axios.create({
    baseURL: 'https://backend-reclamacidade.herokuapp.com/',
    headers: {
        'Content-Type':'application/json'
    }
});

export default Api;