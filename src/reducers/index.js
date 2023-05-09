import { combineReducers } from 'redux';

import picturesReducer from './pictures';
import userReducer from './user';

const rootReducer = combineReducers({
  pictures: picturesReducer,
  user: userReducer,
});

export default rootReducer;
