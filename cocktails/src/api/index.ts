import axios, { AxiosError, type AxiosResponse } from 'axios'

export const BASE_URL = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api',
})

BASE_URL.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    return Promise.reject(error)
})
