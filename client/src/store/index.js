import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from "./reducers/PostReducer";
// import CommentReducer from "./reducers/CommentReducer";

const store = createStore(
    combineReducers({
        postState: PostReducer,
        // commState: CommentReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store