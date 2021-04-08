import { UsersType } from './../redux/users-reducer';
import { instance, ResultCode } from './api';

export const usersAPI = {
    // Get Array of users from server for current page
    getUsers(currentPage = 1, pageSize = 10) {
        return (instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
        );
    },


    followUser(userId: number) {
        return (
            instance.post<FollowedUserResponseType>(`follow/${userId}`)
                .then(response => response.data)
        );

    },
    unfollowUser(userId: number) {
        return (
            instance.delete<FollowedUserResponseType>(`follow/${userId}`)
                .then(response => response.data)
        );
    }
};

export type GetUsersResponseType = {
    items: Array<UsersType>

    totalCount: number
    error: string | null
}

export type FollowedUserResponseType = {
    resultCode: ResultCode
    messages: Array<string>
    data: any
}
