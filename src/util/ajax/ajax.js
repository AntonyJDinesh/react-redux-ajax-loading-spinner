import axios from 'axios';

const _response = {statusCode:0, statusLine: '', data: undefined, headers: {}};
const _getRequestConfig = {url: '', params: {}, headers: {}};
const _postRequestConfig = {url: '', data: {}, headers: {}};
const _defaultRequestHeaders = {'Accept': 'application/json', 'Content-Type': 'application/json'};
const _axiosInstance = axios.create({});

export const doGet = (config) => {
    let _config = {...config, headers: {..._defaultRequestHeaders, ...config.headers}, method: 'get'};
    return _doRequest(_config);
};


export const doPost = (config) => {
    let _config = {...config, headers: {..._defaultRequestHeaders, ...config.headers}, method: 'post'};
    return _doRequest(_config);
};


const _doRequest = async config => {
    let resp = await _axiosInstance.request(config);
    return {statusCode: resp.status, statusLine: resp.statusText, data: resp.data, headers: resp.headers};
};