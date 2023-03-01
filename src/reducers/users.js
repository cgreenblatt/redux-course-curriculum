import { RECEIVE_USERS } from '../actions/users';
import { ADD_TWEET } from '../actions/tweets';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_TWEET:
      const author = action.tweet.author;
      return {
        ...state,
        [author]: {
          ...state[author],
          tweets: state[author].tweets.concat(action.tweet.id),
        },
      };
    default:
      return state;
  }
}
