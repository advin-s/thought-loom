import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface AuthState{
    user:{
        accessToken:string
    },
    isLoading:false,
    error:{}
}

export const selectAuthState = createFeatureSelector<AuthState>('user')

export const selectAccessToken = createSelector(selectAuthState, (authState) => authState.user.accessToken)