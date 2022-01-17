import { Action, ActionTypes } from '../actionTypes';
import { IUserReducer } from './reducerTypes';
import { demoProfiles } from '../../fakeUser';

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
  curUser: {
    userId: 'string',
    userName: 'string',
    userAvatar: '/img/me.jpg' ,
    userIntro: 'string',
    userCompany: 'string',
    userJobTitle: 'string',
    userEducation: 'string',
    userLocation: 'string',
    userInstagram: 'string',
    userRelationship: 'string',
    userFavAlbums: [],
    userFriendStatus: 'string',
  },
  userId: 'string',
  userName: 'string',
  userAvatar: 'string',
  userIntro: 'string',
  userCompany: 'string',
  userJobTitle: 'string',
  userEducation: 'string',
  userLocation: 'string',
  userIg: 'string',
  userRelationship: 'string',
  userFavAlbums: [],
  userFriendStatus: '',
  friendStatus: 0,
  loading: false,
  error: null,
};

export const userReducer = (
  state: IUserReducer = initialState,
  action: ActionTypes
): IUserReducer => {
  switch (action.type) {
    case Action.GET_CUR_USER:
      return {
        ...state,
        curUser: demoProfiles.filter((item) =>
        [action.payload].includes(item.userId)
       )[0],
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
