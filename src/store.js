import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { usersAndPostsReducer, commentsReducer } from "./reducer";
const reducres = combineReducers({
  usersAndPosts: usersAndPostsReducer,
  comments: commentsReducer,
});
const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducres,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
