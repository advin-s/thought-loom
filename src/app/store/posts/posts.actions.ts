import { createAction, props } from "@ngrx/store";
import { PostsSuccess } from "../../interface";


export const getPosts = createAction('[POSTS get posts]', props<{skip:number}>());
export const getPostsSuccess = createAction('[POSTS get posts success]', props<{posts:PostsSuccess}>());
export const getPostsFailed = createAction('[POSTS get posts failure]', props<{error:{}}>())