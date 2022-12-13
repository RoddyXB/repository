import axios from 'axios'
const head = {
    'Content-Type': 'application/json',
}
export const axiosPost = (url, data = {}, headers = head, timeout = 0, source) => {
    return axios.post(url, data, {
        timeout,
        headers,
        cancelToken: source?.token
    })
}

export const axiosPut = (url, data = {}, headers = head, timeout = 0, source) => {
    return axios.put(url, data, {
        timeout,
        headers,
        cancelToken: source?.token
    })
}

export const axiosPatch = (url, data = {}, headers = head, timeout = 0, source) => {
    return axios.patch(url, data, {
        timeout,
        headers,
        cancelToken: source?.token
    })
}

export const axiosDelete = (url, data = {}, headers = head, timeout = 0, source) => {
    return axios.delete(url, {
        timeout,
        headers,
        cancelToken: source?.token
    })
}

export const axiosGet = (url, params = {}, headers = {}, timeout = 0, source) => {
    return axios.get(url, {
        params
    }, {
        timeout,
        headers,
        cancelToken: source?.token
    })
} 