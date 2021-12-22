import { Action, ActionTypes } from '../actionTypes';

export interface IPost {
  postId: number;
  userId: number;
  name: string;
  type: number;
  content: string;
  loading: boolean;
  error: string | null;
}
export interface IPostReducer {
  posts: IPost[];
  post: IPost;
  loading: boolean;
  error: string | null;
}

const initialState = {
  posts: [],
  post: {
    postId: 0,
    userId: 0,
    name: '',
    type: 0,
    content: '',
    loading: false,
    error: '',
  },
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: Action): IPostReducer => {
  switch (action.type) {
    case ActionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
