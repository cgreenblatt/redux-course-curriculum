import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { tweetsReducer } from './tweets';
import { usersReducer } from './users';

export default combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  loadingBar: loadingBarReducer,
});
