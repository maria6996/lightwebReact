import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";


export default axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN_NAME"),
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const defaultConfigService = {
    baseURL: `${baseUrl}/api`,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN_NAME"),
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};


const token = localStorage.getItem("ACCESS_TOKEN_NAME");


export const HttpService = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        Authorization: token ? `Bearer ${token}` : null,
        "Cache-Control": "no-cache",
        crossDomain: true,
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const setHeaders = (token) => {
    return new Promise(resolve => {
        HttpService.interceptors.request.use(config => {
            config.headers.Authorization = token;
            return resolve(config);
        });
    });
}