import { Action, ActionTypes } from '../actionTypes';
import { ISystemReducer } from './reducerTypes'


const initialState = {
  isLogin: false,
  userToken: '',
  isShowPlayer: false,
  audioTrackObj:{
    audioSrc: '',
    audioTitle: '',
    audioImage: '',
    album: '',
    artist: '',
    audioType: '',
  },
  error:  null
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
    default:
      return state;
  }
};
