import axios, { isAxiosError } from 'axios';

import authAPI from '@/api/auth/apis';
import ERROR_RESPONSES from '@/constants/errorMessages';
import STORAGE_KEYS from '@/constants/storageKeys';
import { isProd } from '@/utils/env';

const DEVELOPMENT_API_URL = 'https://www.aligoligo.store:7070';
const PRODUCTION_API_URL = 'https://www.aligoligo.store:8080';

/** 단순한 API 요청 클라이언트 */
export const baseInstance = axios.create({
  baseURL: isProd(import.meta.env.MODE) ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,
  timeout: 30000,
});

/** 사용자 인가 권한이 필요한 API 요청 클라이언트 */
export const authInstance = axios.create({
  baseURL: isProd(import.meta.env.MODE) ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,
  timeout: 30000,
});


// ReIssue API에 대한 에러 처리
authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.accessToken);
  config.headers.Authorization = `Bearer ${token}`

  return config;
});

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (isAxiosError(error)) {
      switch (error.response?.data.message) {
        case ERROR_RESPONSES.reissueFailed: {
          localStorage.removeItem(STORAGE_KEYS.accessToken);
          localStorage.removeItem(STORAGE_KEYS.refreshToken);
          window.location.href = '/';
          break;
        }
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;

    if (isAxiosError(error)) {
      switch (error.response?.data.message) {
        case ERROR_RESPONSES.accessExpired: {
          const res = await authAPI.getReissue();
          localStorage.setItem(STORAGE_KEYS.accessToken, res.accessToken);
          localStorage.setItem(STORAGE_KEYS.refreshToken, res.refreshToken);
          return axios({
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${localStorage.getItem(STORAGE_KEYS.accessToken)}`,
            },
          });
        }
       
        default:
          break;
      }
    }

    return Promise.reject(error);
  },
);
