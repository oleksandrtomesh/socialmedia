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
        "API-KEY": "d3bb9faa-edaa-4bc4-b657-f2a8ebee1f2b"
    }
});