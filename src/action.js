import axios from "axios";
import { error as Error, loading, success } from "./constants";
export const getUsersAndPosts = (userID) => async (dispatch) => {
  try {
    dispatch({ type: loading });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID ? userID+"/posts" : ""}`
    );
    dispatch({ type: success, payload: [...data] });
  } catch (error) {
    dispatch({ type: Error, payload: error.message });
  }
};

export const getComments = (postID) => async (dispatch) => {
  try {
    dispatch({ type: "cmLoading" });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
    );
    dispatch({ type: "cmSuccess", payload: [...data] });
  } catch (error) {
    dispatch({ type: "cmError", payload: error.message });
  }
};

