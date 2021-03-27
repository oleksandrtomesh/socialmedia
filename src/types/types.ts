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
