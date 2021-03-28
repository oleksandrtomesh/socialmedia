import axios from 'axios';
import { UsersType } from '../redux/users-reducer';
import { PhotosType, UserProfileType } from '../types/types';

//w tsiomu fajli zberigajutsia funkcji w kotrych widbuwajetsia zapyt na server


//za dopomogo axios.create stworujemo zapyt axios i pomoszczajemo
//tudy wsi parametry jaki powtorujutsia w konomu zapyti
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d3bb9faa-edaa-4bc4-b657-f2a8ebee1f2b"
    }
});

type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

type FollowedUserResponseType = {
    resultCode: number
    messages: Array<string>
    data: any
}

const usersAPI = {
    // Get Array of users from server for current page
    getUsers(currentPage = 1, pageSize = 10) { 
        return (instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
        )
    },

    
    followUser(userId: number){
        return (
            instance.post<FollowedUserResponseType>(`follow/${userId}`)
            .then(response => response.data)
        )

    },
    unfollowUser(userId: number){
        return (
            instance.delete<FollowedUserResponseType>(`follow/${userId}`)
            .then(response => response.data)
        )
    }
};

type GetUserProfileResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export const headerAPI ={
    authUser(){
        return(
            instance.get<GetUserProfileResponseType>(`auth/me`)
            .then(response => response.data)
        )
    }
}

type ProfileApiResponseType = {
    resultCode: number
    messages: Array<string>
    data:any
}

type UpdateUserPhotoResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: Array<string>
}
export const profileAPI = {
    getUserProfile(userId: number | null){
        return(
            instance.get<UserProfileType>(`profile/` + userId ).then(res => res.data)
        )
    },

    //get user status from server
    getUserStatus(userId: number){
        return(
            instance.get<string>(`profile/status/` + userId).then(res => res.data)
        )
    },
    
    //update auth user status
    updateUserStatus(status: string){
        return(
            instance.put<ProfileApiResponseType>(`profile/status`, {status: status})
            .then(res => res.data.resultCode)
        )
    },

    updateUserPhoto(photoFile: any){
        const formData = new FormData();
        formData.append('image', photoFile)
        return(
            instance.put<UpdateUserPhotoResponseType>(`profile/photo`, formData).then(res => res.data)
        )
    },

    updateUserProfile(profile: UserProfileType){
        return(
            instance.put<ProfileApiResponseType>(`profile`, profile).then(res => res.data)
        )
    }

}

type LoginApiResponseType = {
    resultCode: number
    messages: Array<string>
    data:any
}

export const loginApi = {
    login(values: any){
        return(
            instance.post<LoginApiResponseType>(`auth/login`, values).then(res => res.data)
        )
    },

    logout(){
        return(
            instance.delete<LoginApiResponseType>(`auth/login`).then(res => res.data)
        )
    },

    getCaptcha(){
        return(
            instance.get<{url: string}>(`security/get-captcha-url`).then(res => res.data.url)
        )
    }
}

export default usersAPI;