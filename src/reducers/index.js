import { combineReducers } from 'redux';

import picturesReducer from './pictures';
import userReducer from './user';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  pictures: picturesReducer,
  user: userReducer,
  messages: messagesReducer,
});

export default rootReducer;
