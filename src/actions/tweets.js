import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveLikeToggle } from '../utils/api';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE_TWEET = 'TOGGLE_LIKE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

export function handleToggleLike({ id, hasLiked, authedUser }) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveLikeToggle({ id, hasLiked, authedUser }).then(() => {
      dispatch(hideLoading());
      dispatch(toggleLikeTweet(id, hasLiked, authedUser));
    });
  };
}

function toggleLikeTweet(id, hasLiked, authedUser) {
  return {
    type: TOGGLE_LIKE_TWEET,
    id,
    hasLiked,
    authedUser,
  };
}
