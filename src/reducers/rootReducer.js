import { combineReducers } from 'redux';

import bgReducer from 'reducers/bgReducer'
import colorReducer from 'reducers/colorReducer'

export default combineReducers({
  bgReducer,
  colorReducer
})