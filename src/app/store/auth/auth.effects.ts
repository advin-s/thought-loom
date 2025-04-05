import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailed, loginSuccess } from "./auth.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LoginService } from "../../login/login.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthEffects {
  private actions$ = inject(Actions);
  private loginService = inject(LoginService);
  private router = inject(Router)

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.loginService.onLogin(action).pipe(
          tap((res) => {
            if (res) {
              const responseString = JSON.stringify(res);
              localStorage.setItem("userToken", responseString);
              this.router.navigate(['/dashboard'],{replaceUrl:true})
            }
          })
        )
      ),
      map((loginRes) => loginSuccess({ user: loginRes })),
      catchError((err) => of(loginFailed({ error: err })))
    )
  );
}
