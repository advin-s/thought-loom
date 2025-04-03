import { createReducer, on } from "@ngrx/store"
import { login, loginFailed, loginSuccess, logout } from "./auth.actions"

export const initialState = {
    user:{},
    isLoading:false,
    error:{}
}

export const authReducer = createReducer(initialState, 
    on(login, (state) => ({...state, isLoading:true})),
    on(loginSuccess, (state, {user})=> ({...state, isLoading:false, user})),
    on(loginFailed, (state,{error}) => ({...state,isLoading:false, error})),
    on(logout, (state) => ({...state, user:{}}))
)