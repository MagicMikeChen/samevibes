import { Action, ActionTypes } from '../actionTypes';
import { IPost } from '../reducers/reducerTypes';
import { Dispatch } from 'redux';

export const fetchPost = (post: IPost) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.GET_POST,
    payload: post,
  });
};
export const fetchPosts = (posts: IPost[]) => async (dispatch: Dispatch<ActionTypes>) => {
  // const res = await axios.get('api/posts');
  // const posts = [{id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}]
  dispatch({
    type: Action.GET_POSTS,
    payload: posts,
  });
};
export const getProfilePosts = (userId: string) => async (dispatch: Dispatch<ActionTypes>) => {
  // const res = await axios.get('api/posts');
  // const posts = [{id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}]
  dispatch({
    type: Action.GET_PROFILE_POSTS,
    payload: userId,
  });
};
export const toggleLike = (postId: string) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.TOGGLE_LIKE,
    payload: postId,
  });
};