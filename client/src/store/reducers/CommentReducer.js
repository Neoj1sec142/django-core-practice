// const { GET_COMMENTS, GET_COMMENT_DETAIL, UPDATE_NEWC_STATE, CREATE_COMMENT, DESTROY_COMMENT} = require('../types')

// const initialState = {
//     comments: [],
//     commentDetail: {},
//     newComment: {
//         name: '',
//         description: '',
//         priority: 0,
//         id: null
//     },
//     loading: true,
// }

// const CommentReducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_COMMENTS:
//             return{...state, comments: action.payload, loading:false}
//         case GET_COMMENT_DETAIL:
//             return{...state, postDetail: action.payload, loading:false}
//         case UPDATE_NEWC_STATE:
//             return{...state, newPost: action.payload, loading:false}
//         case CREATE_COMMENT:
//             return{...state, comments: action.payload, loading:false}
//         case DESTROY_COMMENT:
//             return{...state, comments: action.payload, loading:false}
//         default:
//             return{...state}
//     }
// }

// export default CommentReducer