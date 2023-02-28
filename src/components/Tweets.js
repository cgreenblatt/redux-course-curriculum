import { useSelector } from 'react-redux';
import Tweet from './Tweet';

export default function Tweets() {
  const tweets = useSelector((state) => state.tweets);
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
