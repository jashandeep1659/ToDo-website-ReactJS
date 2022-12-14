import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (config) => {
    const cookies = Cookies.get("tokens");
    const tokens = JSON.parse(cookies);
    config.headers = {
        Authorization: `Bearer ${tokens.access}`,
        Accept: "application/json",
    };
    return config;
});

const RefreshAccessToken = async () => {
    const cookies = Cookies.get("tokens");
    const tokens = JSON.parse(cookies);
    const response = await axios.post(`${baseURL}api/token/refresh/`, {
        refresh: tokens.refresh,
    });
    Cookies.set("tokens", JSON.stringify(response.data));

    return response.data.access;
};

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const access_token = await RefreshAccessToken();
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + access_token;
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
