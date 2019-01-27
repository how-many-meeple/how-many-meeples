import axios from 'axios';

export default function makeRequest(url) {
    return axios.get(url)
        .then(function(response){
            return response.data;
        })
        .catch(function(error) {
            return error;
        });
}

