import { Action, ActionTypes } from '../actionTypes';
import { ISystemReducer } from './reducerTypes'


const initialState = {
  isLogin: false,
  userToken: '',
  isShowPlayer: false,
  error:  null
};

export const systemReducer = (
  state: ISystemReducer = initialState,
  action: Action
): ISystemReducer => {
  switch (action.type) {
    case ActionTypes.GET_POST:
      return {
        ...state,
        isLogin: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
