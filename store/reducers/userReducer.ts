import { Action, ActionTypes } from '../actionTypes';
import { IUserReducer } from './reducerTypes'

const initialState = {
  posts: [
    {
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
  userId: 'string',
  userName: 'string',
  userAvatar: 'string',
  userIntro: 'string',
  userJob: 'string',
  userEducation: 'string',
  userLocation: 'string',
  userIg: 'string',
  userRelationship: 'string',
  userCollections: [],
  friendStatus: 0,
  loading: false,
  error: null,
};

export const userReducer = (
  state: IUserReducer = initialState,
  action: ActionTypes
): IUserReducer => {
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
