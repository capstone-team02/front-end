import axios, { AxiosRequestConfig } from "axios";

const BASE_URL =
  "34.22.88.126";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

export const baseApi = axios.create(axiosConfig);
