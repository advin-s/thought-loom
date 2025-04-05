import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AuthSuccess } from '../interface';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth/auth.selector';

@Component({
  selector: 'app-account',
  imports: [HeaderComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  public user!:AuthSuccess
  private store$ = inject(Store)

  ngOnInit(): void {
    this.store$.select(selectUser).subscribe({
      next:(user:AuthSuccess) => {this.user = user; console.log(user)
      },
      error:(err) => console.error(err)
    })
  }

}
