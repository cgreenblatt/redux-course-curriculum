export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_LIKE_TWEET = 'TOGGLE_LIKE_TWEET';

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

export function toggleLikeTweet(tweetId, authedUser) {
  return {
    type: TOGGLE_LIKE_TWEET,
    tweetId,
    authedUser,
  };
}
