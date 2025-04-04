import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { resolvePosts } from '../app/posts/posts.component';
import { isAuthenticated } from './login/auth.guards';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'account',
        loadComponent:()=>import('./account/account.component').then(c => c.AccountComponent),
        title:"Account",
        canActivate:[isAuthenticated]
    },
    {
        path:'posts',
        loadComponent:()=> import('../app/posts/posts.component').then(c => c.PostsComponent),
        canMatch:[isAuthenticated],
        title:'Posts',
        resolve:{
            posts:resolvePosts
        }
    }
];
