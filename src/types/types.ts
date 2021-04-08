import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './../redux/redux-store';

//types for userProfile
export type Contacts = {
    [github: string]: string 
    vk: string 
    facebook: string 
    instagram: string
    twitter: string 
    website: string 
    youtube: string 
    mainLink: string 
}

export type PhotosType = {
    small?: string | null
    large?: string | null
}
export type UserProfileType = {
    userId?: number 
    aboutMe?: string 
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: Contacts
    photos?: PhotosType | undefined
    
}

//types for reducers

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U: never //return type of properties from obj

export type ThunkType<A extends Action> = ThunkAction <void, AppStateType, unknown, A>
