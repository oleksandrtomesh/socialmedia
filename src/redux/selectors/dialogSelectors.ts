import { AppStateType } from './../redux-store'

export const getDialogData = (state: AppStateType) =>
    state.dialogPage.dialogData

export const getMessageData = (state: AppStateType) =>
    state.dialogPage.messageData
