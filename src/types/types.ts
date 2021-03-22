type Contacts = {
    github: string,
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    userId?: number 
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: Contacts
    photos?: PhotosType | null
    
}