import * as services from '../../services/PostServices'
import * as types from '../types'  

export const LoadPostDetail = (post_id) => {
    return async (dispatch) => {
        try {
            const postDetail = await services.GetPostById(post_id)
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: postDetail
            })            
        } catch (err) {throw err}
    }
}

export const LoadPosts = () => {
    return async (dispatch) => {
        console.log("HERE 1")
        try {
            const posts = await services.GetPosts()
            console.log(posts, "HERE 2 UAct")
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })            
        } catch (err) {throw err}
    }
}

export const UploadPost = (id, newPost) => {
    return async (dispatch) => {
        try {
            await services.CreatePost(id, newPost)
            dispatch({
                type: types.CREATE_POST,
                payload: id, newPost
            }) 
        } catch (err) {throw err}
    }
}

export const UpdateNewPostState = (newPost) => ({
    type: types.UPDATE_NEW_STATE,
    payload: newPost
})

export const DestroyPost = (id, post_id) => {
    return async (dispatch) => {
        try {
            await services.RemovePost(id, post_id)
            dispatch({
                type: types.DESTROY_POST
            }) 
        } catch (err) {throw err}
    }
}