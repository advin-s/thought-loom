import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthSuccess } from "../../interface"

export interface AuthState{
    user:AuthSuccess,
    isLoading:boolean,
    error:{},
    isLoggedIn:boolean
}

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectAccessToken = createSelector(selectAuthState, (authState) => authState.user.accessToken)
export const isLoggingIn = createSelector(selectAuthState, (state) => state.isLoading)
export const selectIsLoggedIn = createSelector(selectAuthState, (state) => state.isLoggedIn)
export const selectUser = createSelector(selectAuthState, (state) => state.user)