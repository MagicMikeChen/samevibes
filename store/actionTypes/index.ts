import { IPost, IAudioTrack } from '../reducers/reducerTypes';

export enum Action {
  GET_POST = 'GET_POST',
  GET_POSTS = 'GET_POSTS',
  SET_AUDIO_TRACK = 'SET_AUDIO_TRACK',
  OPEN_PLAYER = 'OPEN_PLAYER',
  CLOSE_PLAYER = 'CLOSE_PLAYER',
}

interface getPost {
  type: Action.GET_POST;
  payload: IPost;
}

interface getPosts {
  type: Action.GET_POSTS;
  payload: IPost[];
}

interface setAudioTrack {
  type: Action.SET_AUDIO_TRACK;
  payload: IAudioTrack;
}


export type ActionTypes = getPost | getPosts | setAudioTrack;
