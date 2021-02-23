import * as axios from 'axios';

//w tsiomu fajli zberigajutsia funkcji w kotrych widbuwajetsia zapyt na server


//za dopomogo axios.create stworujemo zapyt axios i pomoszczajemo
//tudy wsi parametry jaki powtorujutsia w konomu zapyti
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ce0e7425-334e-4fed-b2cd-f429c1343be8"
    }
});

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            }))
    },
    followUser(userId){
        return (
            instance.post(`follow/${userId}`)
            .then(response => response.data)
        )

    },
    unfollowUser(userId){
        return (
            instance.delete(`follow/${userId}`)
            .then(response => response.data)
        )
    }
};

export const headerAPI ={
    authUser(){
        return(
            instance.get(`auth/me`)
            .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getUserProfile(userId){
        return(
            instance.get(`profile/` + userId )
        )
    },

    //get user status from server
    getUserStatus(userId){
        return(
            instance.get(`profile/status/` + userId)
        )
    },
    
    //update login user status
    updateUserStatus(status){
        return(
            instance.put(`profile/status`, {status: status})
        )
    },

    updateUserPhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)
        return(
            instance.put(`profile/photo`, formData)
        )
    },

    updateUserProfile(profile){
        return(
            instance.put(`profile`, profile)
        )
    }

}

export const loginApi = {
    login(values){
        return(
            instance.post(`auth/login`, values)
        )
    },

    logout(){
        return(
            instance.delete(`auth/login`)
        )
    },

    getCaptcha(){
        return(
            instance.get(`security/get-captcha-url`)
        )
    }
}

export default usersAPI;