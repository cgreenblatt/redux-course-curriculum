import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { heartIcon, heartIconFilled, replyIcon } from './icons.js';
import { handleToggleLike } from '../actions/tweets';

export default function Tweet({ tweet }) {
  const author = useSelector((state) => state.users[tweet.author]);
  const dispatch = useDispatch();
  const tempDate = new Date(tweet.timestamp);
  const authedUser = useSelector((state) => state.authedUser);
  const liked = tweet.likes.includes(authedUser);
  const toggleLike = (e) => {
    e.preventDefault();
    dispatch(handleToggleLike({ id: tweet.id, hasLiked: !liked, authedUser }));
  };

  const initialTweetAuthor = useSelector(({ tweets }) => {
    return tweet.replyingTo ? tweets[tweet.replyingTo].author : null;
  });
  return (
    <Link to={`/tweet/${tweet.id}`}>
      <div className="tweet">
        <img
          className="avatar"
          src={author.avatarURL}
          alt={`${author.name} avatar`}
        />
        <div className="tweet-info">
          <h3>{author.name}</h3>
          <div className="tweet-info__ts">
            {`${tempDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })} | ${tempDate.toLocaleDateString()}`}
          </div>
          {initialTweetAuthor && (
            <div className="tweet-info__reply">
              <Link to={`/tweet/${tweet.replyingTo}`}>
                Replying to @{initialTweetAuthor}
              </Link>
            </div>
          )}
          <p>{tweet.text}</p>
          <div className="tweet-icons">
            {replyIcon}
            <span>{tweet.replies.length}</span>
            <button className="heart-button" onClick={toggleLike}>
              {liked ? heartIconFilled : heartIcon}
            </button>
            <span>{tweet.likes.length}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
