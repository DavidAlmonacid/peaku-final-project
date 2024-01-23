const BASE_URL_DEV = import.meta.env.VITE_BASE_URL_DEV;
const BASE_URL_PROD = import.meta.env.VITE_BASE_URL_PROD;

export const BASE_URL = import.meta.env.DEV ? BASE_URL_DEV : BASE_URL_PROD;
