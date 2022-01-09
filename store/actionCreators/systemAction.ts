import { Action, ActionTypes } from '../actionTypes';
import { IAudioTrack } from '../reducers/reducerTypes';
import { Dispatch } from 'redux';

export const setAudioTrack = (audioTrackObj: IAudioTrack) => async (dispatch: Dispatch<ActionTypes>) => {
  await dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
  await dispatch({
    type: Action.SET_AUDIO_TRACK,
    payload: audioTrackObj,
  });
  await dispatch({
    type: Action.SET_AUDIO_PLAY,
    payload: true,
  });
};
export const setAudioPlay = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_AUDIO_PLAY,
    payload: true,
  });
};
export const setAudioPause = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
};
export const setPlayerOpen = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.OPEN_PLAYER,
    payload: true,
  });
};
export const setPlayerClose = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.CLOSE_PLAYER,
    payload: false,
  });
  dispatch({
    type: Action.SET_AUDIO_PAUSE,
    payload: false,
  });
};

