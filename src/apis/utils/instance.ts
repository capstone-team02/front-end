import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080/mytown/v1";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const baseApi = axios.create(axiosConfig);
