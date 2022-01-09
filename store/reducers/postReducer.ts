import { Action, ActionTypes } from '../actionTypes';
import { IPostReducer } from './reducerTypes'

const initialState = {
  posts: [
    {
      postId: '',
      userId: '',
      userName: '',
      userAvatar: '',
      postType: '',
      contentObj: {
        contentId: '',
        contentTitle: '',
        contentPhoto: '',
        contentURL: '',
        contentType: '',
        audioSrc: '',
        audioTitle: '',
        audioImage: '',
        album: '',
        artist: '',
        audioType: '',
      },
      isLiked: 0,
      comments: [],
      loading: false,
      error: '',
    },
  ],
  post: {
    postId: '',
    userId: '',
    userName: '',
    userAvatar: '',
    postType: '',
    contentObj: {
      contentId: 'string',
      contentTitle: 'string',
      contentPhoto: 'string',
      contentURL: 'string',
      contentType: 'string',
    },
    isLiked: 0,
    comments: [],
    loading: false,
    error: '',
  },
  loading: false,
  error: null,
};

export const postReducer = (
  state: IPostReducer = initialState,
  action: ActionTypes
): IPostReducer => {
  switch (action.type) {
    case Action.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    case Action.GET_POSTS:
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
