import { Action, ActionTypes } from '../actionTypes';
import { IPost } from '../reducers/postReducer';
import { Dispatch } from 'redux';

export const fetchPost = (post: IPost) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.GET_POST,
    payload: post,
  });
};
export const fetchPosts = (posts: IPost[]) => async (dispatch: Dispatch<Action>) => {
  // const res = await axios.get('api/posts');
  // const posts = [{id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}]
  dispatch({
    type: ActionTypes.GET_POSTS,
    payload: posts,
  });
};
