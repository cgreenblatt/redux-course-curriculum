import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import tweetsReducer from './tweets';
import usersReducer from './users';
import authedUserReducer from './authedUser';

export default combineReducers({
  authedUser: authedUserReducer,
  tweets: tweetsReducer,
  users: usersReducer,
  loadingBar: loadingBarReducer,
});
