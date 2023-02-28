import { RECEIVE_TWEETS, TOGGLE_LIKE_TWEET } from '../actions/tweets';

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return action.tweets;
    case TOGGLE_LIKE_TWEET:
      const { tweetId, authedUser } = action;
      return {
        ...state,
        [tweetId]: {
          ...state[tweetId],
          likes: state[tweetId].likes.includes(authedUser)
            ? state[tweetId].likes.filter((userId) => userId !== authedUser)
            : state[tweetId].likes.concat(authedUser),
        },
      };
    default:
      return state;
  }
}
