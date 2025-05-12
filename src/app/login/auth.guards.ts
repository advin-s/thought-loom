import { inject } from "@angular/core";
import { CanMatchFn, RedirectCommand, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectAccessToken, selectIsLoggedIn } from "../store/auth/auth.selector";
import { map, switchMap, take, tap } from "rxjs";
import { HttpInterceptorFn } from "@angular/common/http";


export const isAuthenticated:CanMatchFn = (route,urlSegment) =>{
    const store$ = inject(Store)
    const router = inject(Router)
    return store$.select(selectIsLoggedIn).pipe(map(res => {
        if(res){
            return true
        }
        return new RedirectCommand(router.parseUrl(''))
    }))
}

export const authInterceptor:HttpInterceptorFn = (req,next) => {
    const store$ = inject(Store)
    const userToken = JSON.parse(localStorage.getItem('userToken') || '')
    const {accessToken} = userToken
    if(accessToken){
        req = req.clone({setHeaders:{Authorization: `Bearer ${accessToken}`}})
    } 
    return next(req).pipe(tap(res => console.log(res)
    ))
    // return store$.select(selectAccessToken).pipe(take(1), switchMap((token:any) => {
    //     if(token){
    //         req = req.clone({setHeaders:{ Authorization: `Bearer ${token}` }})
    //     }
    //     return next(req)
    // }))
}