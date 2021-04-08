import { instance, ResultCode } from './api';


export const loginApi = {
    login(values: any) {
        return (
            instance.post<LoginApiResponseType>(`auth/login`, values).then(res => res.data)
        );
    },

    logout() {
        return (
            instance.delete<LoginApiResponseType>(`auth/login`).then(res => res.data)
        );
    },

    getCaptcha() {
        return (
            instance.get<{ url: string; }>(`security/get-captcha-url`).then(res => res.data.url)
        );
    }
};

export type LoginApiResponseType = {
    resultCode: ResultCode
    messages: Array<string>
    data:any
}