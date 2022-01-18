import { Action, ActionTypes } from '../actionTypes';
import { IPostReducer } from './reducerTypes';

const initialState = {
  profilePosts: [
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
    case Action.GET_PROFILE_POSTS:
      return {
        ...state,
        profilePosts: action.payload,
        loading: false,
        error: null,
      };
      case Action.TOGGLE_LIKE:
        const newLikeStatus = state.posts.map((item)=>{
          if(action.payload ===  item.postId){
           item.isLiked === 0 ?  item.isLiked=1 : item.isLiked=0
          }
          return item
        })
        return {
          ...state,
          posts: newLikeStatus,
          loading: false,
          error: null,
        };
    default:
      return state;
  }
};
