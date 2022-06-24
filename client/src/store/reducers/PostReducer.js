const { GET_POSTS, GET_POST_DETAIL, UPDATE_NEW_STATE, CREATE_POST, DESTROY_POST} = require('../types')

const initialState = {
    posts: [],
    postDetail: {},
    newPost: {
        name: '',
        description: '',
        priority: 0,
        id: null
    },
    loading: true,
}

const PostReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return{...state, posts: action.payload, loading:false}
        case GET_POST_DETAIL:
            return{...state, postDetail: action.payload, loading:false}
        case UPDATE_NEW_STATE:
            return{...state, newPost: action.payload, loading:false}
        case CREATE_POST:
            return{...state, posts: action.payload, loading:false}
        case DESTROY_POST:
            return{...state, posts: action.payload, loading:false}
        default:
            return{...state}
    }
}

export default PostReducer