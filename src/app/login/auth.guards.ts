import { inject } from "@angular/core";
import { CanMatchFn, RedirectCommand, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectAccessToken } from "../store/auth/auth.selector";
import { map } from "rxjs";


export const isAuthenticated:CanMatchFn = (route,urlSegment) =>{
    const store$ = inject(Store)
    const router = inject(Router)
    return store$.select(selectAccessToken).pipe(map(res => {
        if(res){
            return true
        }
        return new RedirectCommand(router.parseUrl(''))
    }))
}