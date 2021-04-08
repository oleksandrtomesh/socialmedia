import { PhotosType, UserProfileType } from '../types/types';
import { instance, ResultCode } from './api';

export const profileAPI = {
    getUserProfile(userId: number | null) {
        return (
            instance.get<UserProfileType>(`profile/` + userId).then(res => res.data)
        );
    },

    //get user status from server
    getUserStatus(userId: number | null) {
        return (
            instance.get<string>(`profile/status/` + userId).then(res => res.data)
        );
    },

    //update auth user status
    updateUserStatus(status: string) {
        return (
            instance.put<ProfileApiResponseType>(`profile/status`, { status: status })
                .then(res => res.data.resultCode)
        );
    },

    updateUserPhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return (
            instance.put<UpdateUserPhotoResponseType>(`profile/photo`, formData).then(res => res.data)
        );
    },

    updateUserProfile(profile: UserProfileType) {
        return (
            instance.put<ProfileApiResponseType>(`profile`, profile).then(res => res.data)
        );
    }
};

export type ProfileApiResponseType = {
    resultCode: ResultCode
    messages: Array<string>
    data:any
}

export type UpdateUserPhotoResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: ResultCode
    messages: Array<string>
}