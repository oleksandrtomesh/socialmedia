import { FilterType, UsersType } from './../redux/users-reducer';
import { instance, ResultCode } from './api';

export const usersAPI = {
    // Get Array of users from server for current page
    getUsers(currentPage = 1, pageSize = 10, filter: FilterType = {term: "", friend: null}) {
        return (instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term}` + 
            (filter.friend === null ? '' : `&friend=${filter.friend}`))
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
