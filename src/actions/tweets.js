import { RECEIVE_TWEETS } from '../reducers/tweets';

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}
