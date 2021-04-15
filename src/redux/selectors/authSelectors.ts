import { AppStateType } from './../redux-store';

export const getAuthUserProfile = (state: AppStateType) =>
    state.authorization.authUserProfile