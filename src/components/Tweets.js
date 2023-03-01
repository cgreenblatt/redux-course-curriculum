import { useSelector } from 'react-redux';
import Tweet from './Tweet';

export default function Tweets({ selected = null }) {
  let tweets = useSelector((state) => state.tweets);
  if (selected) {
    tweets = selected.reduce((acc, tweetId) => {
      acc[tweetId] = tweets[tweetId];
      return acc;
    }, {});
  }
  const sortedTweets = Object.values(tweets).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <ul>
      {sortedTweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet tweet={tweet} />
        </li>
      ))}
    </ul>
  );
}
