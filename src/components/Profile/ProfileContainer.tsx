import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import withAuthRedirect from '../../HightOrderComponent(hoc)/withAuthRedirect'
import {
    setUserProfile,
    setStatus,
} from '../../redux/profile-reducer'
import Profile from './Profile'
import { compose } from 'redux'
import Loader from '../commonElements/loader/loader'
import { getAuthUserData, getIsProfileFetching } from '../../redux/selectors/profileSelectors' 

const ProfileContainer: React.FC<ProfilePropsType> = (props) => {
  
  const dispatch = useDispatch()

  const authorizedUserId = useSelector(getAuthUserData)
  const isProfileFetching = useSelector(getIsProfileFetching)

  const setProfile = (userId: number | null) => {
    dispatch(setUserProfile(userId))
  }
  const setUserStatus = (userId: number | null) => {
    dispatch(setStatus(userId))
  }
  
  const refreshProfile = (id: string) => {
    let userId: number | null = parseInt(id)
    if(!userId && authorizedUserId != null){
      userId = authorizedUserId.id
    }
    setProfile(userId)
    setUserStatus(userId)
  }

  useEffect(() => {
    refreshProfile(props.match.params.userId)
  }, [props.match.params.userId])
  
    return (
      <div>
        {isProfileFetching
          ?<Loader/>
          :<Profile isOwner={!props.match.params.userId} />
        }
      </div>
        )
}



export default compose(
  withRouter,  
  withAuthRedirect //This is a HOC what verify does user authorised, if not redirect to "/login"
)(ProfileContainer) as React.ComponentType;


type PathParamTypes = {
  userId: string
}

export type ProfilePropsType = RouteComponentProps<PathParamTypes>