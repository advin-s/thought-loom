import { createReducer, on } from "@ngrx/store"
import { getPosts, getPostsFailed, getPostsSuccess } from "./posts.actions"

export const initialPostState = {
    isLoading:false,
    posts:{},
    error:{}
}

export const postsReducer = createReducer(initialPostState,
    on(getPosts, (state)=> ({...state, isLoading:true, error:{}})),
    on(getPostsSuccess, (state, {posts}) => ({...state, posts:{...state.posts, ...posts}, isLoading:false})),
    on(getPostsFailed, (state,{error}) => ({...state,error, isLoading:false}))
)