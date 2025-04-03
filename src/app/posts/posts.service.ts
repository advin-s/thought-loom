import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private serverAddress:string = environment.serverAddress
  private http = inject(HttpClient)

  constructor() { }

  getPosts(skip?:number){    
    return this.http.get(`${this.serverAddress}/posts?limit=10${skip ? `&skip=${skip}`: ''}`)
  }
}
