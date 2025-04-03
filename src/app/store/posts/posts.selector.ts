import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface PostState {
    isLoading:false,
    posts:{
        posts:[]
    },
    error:{}
}

export const selectPostState = createFeatureSelector<PostState>('posts')

export const selectPosts = createSelector(selectPostState, (postState)=> postState.posts.posts)
