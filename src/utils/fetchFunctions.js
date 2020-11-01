const axios = require('axios');

export function fetchSearchResult(data) {
    return axios.get(`/api/student/search/${data.id}`).then(function (response) { return response.data })
}

export function fetchTableFields() {
    return axios.get('/api/student/add/fields').then(function (response) { return response.data })
}

export function addNewEntity(data) {
    const student = Object.fromEntries(data.entity);
    return axios({
        method: 'POST',
        url: 'api/student/add',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(student)
    })
}

export function deleteEntity(data) {
    return axios.delete(`api/student/delete/${data.id}`);
}