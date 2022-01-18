import { IPost, IAudioTrack, ICurUser } from '../reducers/reducerTypes';

export enum Action {
  GET_POST = 'GET_POST',
  GET_POSTS = 'GET_POSTS',
  GET_PROFILE_POSTS = 'GET_PROFILE_POSTS',
  SET_AUDIO_TRACK = 'SET_AUDIO_TRACK',
  OPEN_PLAYER = 'OPEN_PLAYER',
  CLOSE_PLAYER = 'CLOSE_PLAYER',
  SET_AUDIO_PLAY = 'SET_AUDIO_PLAY',
  SET_AUDIO_PAUSE = 'SET_AUDIO_PAUSE',
  GET_CUR_USER = 'GET_CUR_USER',
  TOGGLE_LIKE = 'TOGGLE_LIKE',
}

interface getPost {
  type: Action.GET_POST;
  payload: IPost;
}

interface getPosts {
  type: Action.GET_POSTS;
  payload: IPost[];
}

interface getProfilePosts {
  type: Action.GET_PROFILE_POSTS;
  payload: IPost[];
}
interface setAudioTrack {
  type: Action.SET_AUDIO_TRACK;
  payload: IAudioTrack;
}

interface setAudioPlay {
  type: Action.SET_AUDIO_PLAY;
  payload: boolean;
}
interface setAudioPause {
  type: Action.SET_AUDIO_PAUSE;
  payload: boolean;
}
interface setPlayerOpen {
  type: Action.OPEN_PLAYER;
  payload: boolean;
}
interface setPlayerClose {
  type: Action.CLOSE_PLAYER;
  payload: boolean;
}
interface getCurUser {
  type: Action.GET_CUR_USER;
  payload: string | string[];
}
interface toggleLike {
  type: Action.TOGGLE_LIKE;
  payload: string;
}

export type ActionTypes =
  | getPost
  | getPosts
  | setAudioTrack
  | setAudioPlay
  | setAudioPause
  | setPlayerOpen
  | setPlayerClose
  | getProfilePosts
  | getCurUser
  | toggleLike;
