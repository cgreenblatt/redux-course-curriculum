import {
  ADD_TWEET,
  RECEIVE_TWEETS,
  TOGGLE_LIKE_TWEET,
} from '../actions/tweets';

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
    case ADD_TWEET:
      const replyingTo = action.tweet.replyingTo;
      return replyingTo
        ? {
            ...state,
            [action.tweet.id]: action.tweet,
            [replyingTo]: {
              ...state[replyingTo],
              replies: state[replyingTo].replies.concat(action.tweet.id),
            },
          }
        : {
            ...state,
            [action.tweet.id]: action.tweet,
          };
    default:
      return state;
  }
}
