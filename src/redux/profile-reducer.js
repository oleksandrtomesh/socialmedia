import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA ='UPDATE-TEXT-AREA';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you?", likeCounter: 12},
        {id: 2, message: "It's my firs post", likeCounter: 13},
        {id: 3, message: "It's my second post", likeCounter: 14},
        {id: 4, message: "It's my third post", likeCounter: 15},
        {id: 5, message: "It's my fourth post", likeCounter: 16},
        {id: 6, message: "It's my fifth post", likeCounter: 17  }
    ],
    newPostText: "",
    userProfile: null,
    userStatus: "",
    isFetching: false
};

const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST:
                let newPostObj = {
                    id: 5,
                    message: action.newPostText,
                    likeCounter: 0
                };
                
                return {
                    ...state,
                    postData: [newPostObj, ...state.postData],
                    newPostText: ""
                };

            case UPDATE_TEXT_AREA: 

                return {
                    ...state,
                    newPostText: action.newText
                };
            ;

            case SET_USER_PROFILE: 
                return {
                    ...state,
                    userProfile: action.profile
                }
            ;

            case SET_USER_STATUS: {
                return {
                    ...state,
                    userStatus: action.status
                };
            }

            case SAVE_PHOTO_SUCCESS: 
                return {
                    ...state,
                    userProfile: {...state.userProfile, photos: action.photos},
                }
            ;

            case IS_FETCHING: 
                return {
                    ...state,
                    isFetching: action.isFetching
                }

            default:
                return state;
        }
    }

//створюємо ActionCreatore, щоб не помилитись при тому як передаємо dispatch 
//до компоненти і імпортую їх в файл MyPosts
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const updateTextAreaActionCreator = (text) => ({ type: UPDATE_TEXT_AREA, newText: text });
export const setProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})

//thunk creators powertaje inszu funkciju, kotra robyt zapyt na serwer i potim dispatchyt ci dani 
//w state za dopomogoju action creatora
export const addNewPost = (newPostText) => {
    return (dispatch) => dispatch(addPost(newPostText))
};

export const setUserProfile = (userId) => async (dispatch) => { 
            dispatch(isFetching(true))
            const response = await profileAPI.getUserProfile(userId)
            dispatch(setProfile(response.data));
            dispatch(isFetching(false))
        }

export const setStatus = (userId) => {
    return ((dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
                }
            )
        }
    )
};

export const updateStatus = (status) => {
    return ((dispatch) => {
            profileAPI.updateUserStatus(status)
                .then(response => {
                    if (response.resultCode === 0 ){
                        dispatch(setUserStatus(status))
                    }
                }
            )
        }
    )
}

export const saveUserPhoto = (photo) => async (dispatch) => {
    dispatch(isFetching(true))
    const response = await profileAPI.updateUserPhoto(photo)
        if (response.data.resultCode === 0 ){
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    dispatch(isFetching(false))
}

export const saveProfileInfo = (profile) => async (dispatch, getState) => {
    const userId = getState().authorization.data.id;
    const response = await profileAPI.updateUserProfile(profile)
    if (response.data.resultCode === 0){
        dispatch(setUserProfile(userId))
    } else {
        return response.data.messages;
    }
}

export default profileReducer;