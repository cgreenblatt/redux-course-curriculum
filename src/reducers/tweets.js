import { RECEIVE_TWEETS, TOGGLE_LIKE_TWEET } from '../actions/tweets';

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return action.tweets;
    case TOGGLE_LIKE_TWEET:
      const { id, authedUser, hasLiked } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          likes: hasLiked
            ? state[id].likes.concat(authedUser)
            : state[id].likes.filter((userId) => userId !== authedUser),
        },
      };
    default:
      return state;
  }
}
