import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../../posts/posts.service';
import { getPosts, getPostsFailed, getPostsSuccess } from './posts.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsEffects {
  private actions$ = inject(Actions);
  private postsService = inject(PostsService);

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(({skip}) => this.postsService.getPosts(skip)),
      map((res: any) => getPostsSuccess({ posts: res })),
      catchError((err: any) => of(getPostsFailed({ error: err })))
    )
  );
}
