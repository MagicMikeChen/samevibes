import { Action, ActionTypes } from '../actionTypes';
import { IAudioTrack } from '../reducers/reducerTypes';
import { Dispatch } from 'redux';

export const setAudioTrack = (audioTrackObj: IAudioTrack) => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: Action.SET_AUDIO_TRACK,
    payload: audioTrackObj,
  });
};
// export const openPlayer = (posts: IPost[]) => async (dispatch: Dispatch<Action>) => {
//   // const res = await axios.get('api/posts');
//   // const posts = [{id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}]
//   dispatch({
//     type: ActionTypes.GET_POSTS,
//     payload: posts,
//   });
// };
// export const closePlayer = (posts: IPost[]) => async (dispatch: Dispatch<Action>) => {
//   // const res = await axios.get('api/posts');
//   // const posts = [{id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}, {id:1, type:1, user: 'me'}]
//   dispatch({
//     type: ActionTypes.GET_POSTS,
//     payload: posts,
//   });
// };
