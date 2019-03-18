import axios from 'axios';

export default function makeRequest(url, headers) {
    return axios.get(url, headers)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

