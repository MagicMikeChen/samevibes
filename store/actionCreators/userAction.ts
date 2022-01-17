import { Action, ActionTypes } from '../actionTypes';
import { Dispatch } from 'redux';


export const getCurUser = (searchKey: string|string[]) => async (dispatch: Dispatch<ActionTypes>) => {

  dispatch({
    type: Action.GET_CUR_USER,
    payload: searchKey,
  });
};

