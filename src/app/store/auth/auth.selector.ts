import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface AuthState{
    user:{
        accessToken:string
    },
    isLoading:boolean,
    error:{}
}

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectAccessToken = createSelector(selectAuthState, (authState) => authState.user.accessToken)
export const isLoggingIn = createSelector(selectAuthState, (state) => state.isLoading)