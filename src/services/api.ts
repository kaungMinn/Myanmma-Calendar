import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { jwtDecode } from "jwt-decode";

import { instanceForJSON, instanceForMultipart, newInstanceForJSON } from "@/api/instance";
import { ACCESS_TOKEN } from "@/constants/storage";
import { clearAllCookies, clearAllLocalStorage, getCookie } from "@/utils/storage";

type UserInformationType = {
  userId: number;
  fullName: string;
  email: string;
  deptId: number;
  roleId: number;
  iat: number;
  exp: number;
};

async function onRequest(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
  const accessToken = getCookie(ACCESS_TOKEN);
  config.headers!.Authorization = `Bearer ${accessToken}`;
  if (!accessToken) {
    return config;
  }

  const user: UserInformationType = jwtDecode(accessToken);

  const isExpired = user.exp * 1000 < new Date().getTime();

  if (isExpired) {
    clearAllCookies();
    clearAllLocalStorage();
    window.location.reload();
  }

  return config;
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

function onResponse(res: AxiosResponse): AxiosResponse {
  return res;
}

function onResponseError(error: AxiosError): Promise<AxiosError> {
  // Get the status code from the error response
  const statusCode = error.response?.status;

  // Handle 401 Unauthorized errors globally
  if (statusCode === 401) {
    // Clear all cookies and localStorage
    clearAllCookies();
    clearAllLocalStorage();

    // Redirect to login page
    window.location.href = "/auth/login";

    // Return to prevent further error handling
    return Promise.reject(error);
  }

  return Promise.reject(error);
}

export function getApiInstanceForJSON() {
  instanceForJSON.interceptors.request.use(onRequest, onRequestError);
  instanceForJSON.interceptors.response.use(onResponse, onResponseError);

  return instanceForJSON;
}

export function getNewApiInstanceForJSON() {
  newInstanceForJSON.interceptors.request.use(onRequest, onRequestError);
  newInstanceForJSON.interceptors.response.use(onResponse, onResponseError);

  return newInstanceForJSON;
}

export function getApiInstanceForMultipart() {
  instanceForMultipart.interceptors.request.use(onRequest, onRequestError);
  instanceForMultipart.interceptors.response.use(onResponse, onResponseError);

  return instanceForMultipart;
}
