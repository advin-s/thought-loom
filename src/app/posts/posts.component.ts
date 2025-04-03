import { Component, inject, input, OnInit } from "@angular/core";
import { ActivatedRoute, ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "./posts.service";
import { HeaderComponent } from "../header/header.component";
import { Store } from "@ngrx/store";
import { getPosts } from "../store/posts/posts.actions";
import { selectPosts } from "../store/posts/posts.selector";

@Component({
  selector: "app-posts",
  imports: [HeaderComponent],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  public posts!:any[]
  private route = inject(ActivatedRoute)
  private store$ = inject(Store)

  ngOnInit(): void {
    // this.route.data.subscribe({
    //   next:(res) => { const {posts} = res; this.posts = posts}
    // })   
    
    this.store$.dispatch(getPosts({skip:0})) 
    this.store$.select(selectPosts).subscribe(res => console.log(res)
    )
    
  }
  
}

export const resolvePosts: ResolveFn<Observable<any>> = (route, state) => {
  const postService = inject(PostsService);
  return postService.getPosts();
};
