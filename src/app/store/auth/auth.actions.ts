import { createAction, props } from "@ngrx/store";
import { AuthSuccess, UserAuth } from "../../interface";


export const login = createAction('[Auth] login', props<UserAuth>())
export const loginSuccess = createAction('[Auth] login success', props<{user:AuthSuccess}>())
export const loginFailed = createAction('[Auth] login failed', props<{error:{}}>())

export const logout = createAction('[Auth logout]')

