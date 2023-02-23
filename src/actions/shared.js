import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    getInitialData().then(({ tweets, users }) => {
      dispatch(hideLoading());
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
    });
  };
}
