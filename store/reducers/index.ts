import { combineReducers } from 'redux'
import { postReducer } from './postReducer'

export const reducers = combineReducers({
  postsState: postReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers