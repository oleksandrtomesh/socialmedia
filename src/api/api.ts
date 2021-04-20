import axios from 'axios';

//enum for resultCode

export enum ResultCode {
    success = 0,
    error = 1,
    captchaIsRequired = 10
}

// create instance for request to server
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "94255a0f-3471-4b7b-b59d-a3f0dda8cb88"
    }
});