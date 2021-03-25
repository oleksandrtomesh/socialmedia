type Contacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserProfileType = {
    userId?: number 
    aboutMe?: string 
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: Contacts
    photos?: PhotosType | null
    
}