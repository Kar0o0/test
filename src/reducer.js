import {
  error as Error,
  loading,
  success,
  changeName as changename,
} from "./constants";

export const usersAndPostsReducer = (
  state = { data: [], error: "", loading: false },
  action
) => {
  switch (action.type) {
    case success:
      return { data: action.payload, loading: false, error: "" };
    case Error:
      return { ...state, error: action.payload, loading: false };
    case loading:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
export const commentsReducer = (
  state = { data: [], error: "", loading: false },
  action
) => {
  switch (action.type) {
    case "cmSuccess":
      return { data: action.payload, loading: false, error: "" };
    case "cmError":
      return { ...state, error: action.payload, loading: false };
    case "cmLoading":
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
