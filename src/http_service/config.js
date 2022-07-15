import axios from 'axios'
import { ENV } from '../constants/env'


const headers = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'x-tf-ecommerce': '', // Paste here x-tf-ecommerce value for authed user (temp solution)
    'X-Source-Origin': ENV.X_SOURCE_ORIGIN
}

export const baseRequest = axios.create({
    baseURL: `${ENV.API_BASE}/api`,
    withCredentials: true,
    headers
})