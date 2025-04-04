import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { login } from '../store/auth/auth.actions';
import { Observable } from 'rxjs';
import { isLoggingIn } from '../store/auth/auth.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  private store$ = inject(Store)
  public isLoggingIn:Observable<boolean> = this.store$.select(isLoggingIn)

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.loginForm.invalid) return
    this.store$.dispatch(login(this.loginForm.value))
  }

}
