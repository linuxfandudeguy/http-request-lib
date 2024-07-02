// http-request-lib.js

// Define httpRequestLib object globally
const httpRequestLib = {
    get: function (url) {
        return axios.get(url)
            .then(response => response.data)
            .catch(error => console.error('Error making GET request:', error));
    },
    post: function (url, data) {
        return axios.post(url, data)
            .then(response => response.data)
            .catch(error => console.error('Error making POST request:', error));
    },
    put: function (url, data) {
        return axios.put(url, data)
            .then(response => response.data)
            .catch(error => console.error('Error making PUT request:', error));
    },
    delete: function (url) {
        return axios.delete(url)
            .then(response => response.data)
            .catch(error => console.error('Error making DELETE request:', error));
    }
};
