import LoadingReducer from './loading_reducer'
import { combineReducers } from 'redux'

const uiReducer = combineReducers({
  loading: LoadingReducer
})

export default uiReducer;