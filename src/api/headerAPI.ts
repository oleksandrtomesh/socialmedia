import { instance, ResultCode } from './api';


export const headerAPI = {
    authUser() {
        return (
            instance.get<GetUserProfileResponseType>(`auth/me`)
                .then(response => response.data)
        );
    }
};

export type GetUserProfileResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}