import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect'
import {
    setUserProfile,
    setStatus,
} from '../../redux/profile-reducer'
import Profile from './Profile'
import Loader from '../commonElements/loader/loader'
import { getAuthUserData, getIsProfileFetching } from '../../redux/selectors/profileSelectors' 

const ProfileContainer: React.FC = React.memo(() => {
  
  const dispatch = useDispatch()

  //get data from profile reducer
  const authorizedUserId = useSelector(getAuthUserData)
  const isProfileFetching = useSelector(getIsProfileFetching)

  
  const setProfile = (userId: number | null) => {
    dispatch(setUserProfile(userId))
  }
  const setUserStatus = (userId: number | null) => {
    dispatch(setStatus(userId))
  }
  
  //function for set or refresh user profile
  const refreshProfile = (id: string) => {
    let userId: number | null = parseInt(id)
    if(!userId && authorizedUserId != null){
      userId = authorizedUserId.id
    }
    setProfile(userId)
    setUserStatus(userId)
  }

  //get params (userId) from URL
  let {userId}: {userId: string} = useParams()
  
  //refresh user profile
  useEffect(() => {
    refreshProfile(userId)
  }, [userId])
  
    return (
      <div>
        {isProfileFetching
          ?<Loader/>
          :<Profile isOwner={!userId} />
        }
      </div>
        )
}
)

//This is a HOC what verify does user authorised, if not redirect to "/login"
export default  withAuthRedirect(ProfileContainer) as React.ComponentType;