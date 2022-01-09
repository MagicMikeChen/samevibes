import { Action, ActionTypes } from '../actionTypes';
import { ISystemReducer } from './reducerTypes';

const initialState = {
  isLogin: false,
  userToken: '',
  isShowPlayer: false,
  isAudioPlay: false,
  audioTrackObj: {
    audioSrc: '',
    audioTitle: '',
    audioImage: '',
    album: '',
    artist: '',
    audioType: '',
  },
  error: null,
};

export const systemReducer = (
  state: ISystemReducer = initialState,
  action: ActionTypes
): ISystemReducer => {
  switch (action.type) {
    case Action.SET_AUDIO_TRACK:
      return {
        ...state,
        audioTrackObj: action.payload,
        error: null,
      };
    case Action.SET_AUDIO_PLAY:
      return {
        ...state,
        isAudioPlay: action.payload,
        error: null,
      };
    case Action.SET_AUDIO_PAUSE:
      return {
        ...state,
        isAudioPlay: action.payload,
        error: null,
      };
    case Action.OPEN_PLAYER:
      return {
        ...state,
        isShowPlayer: action.payload,
        error: null,
      };
    case Action.CLOSE_PLAYER:
      return {
        ...state,
        isShowPlayer: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
