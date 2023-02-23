import { useSelector } from 'react-redux';

export default function Tweets() {
  const tweets = useSelector((state) => state.tweets);
  return (
    <ul>
      {Object.keys(tweets).map((key) => (
        <li key={key}>
          <p>{JSON.stringify(tweets[key])}</p>
        </li>
      ))}
    </ul>
  );
}
