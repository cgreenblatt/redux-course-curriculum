export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function tweetsReducer(state = {}, action) {
  console.log('action.tweets', action.tweets);
  switch (action.type) {
    case 'RECEIVE_TWEETS':
      return action.tweets;
    default:
      return state;
  }
}
