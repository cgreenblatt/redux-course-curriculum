import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleSaveTweet } from '../actions/tweets';
import Tweet from './Tweet';
import Tweets from './Tweets';

export default function AddTweet() {
  const [text, setText] = useState('');
  const { id } = useParams();
  const tweets = useSelector((state) => state.tweets);
  const tweet = tweets[id];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSetText = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveTweet({ text, replyingTo: id || null }, () => navigate('/'))
    );
  };

  return (
    <>
      {id && <Tweet tweet={tweet} />}
      <form className="new-tweet">
        <textarea
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleSetText}
          maxLength={280}
        ></textarea>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {id && tweet.replies.length > 0 && <Tweets selected={tweet.replies} />}
    </>
  );
}
