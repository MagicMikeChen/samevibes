import {IPost} from '../reducers/postReducer'

export enum ActionTypes {
  GET_POST = 'GET_POST',
  GET_POSTS = 'GET_POSTS',
}

interface getPost {
  type: ActionTypes.GET_POST;
  payload: IPost;
}

interface getPosts {
  type: ActionTypes.GET_POSTS;
  payload: IPost[];
}

export type Action = getPost | getPosts;
