import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleReceiveData } from '../actions/shared';
import Tweets from './Tweets';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleReceiveData());
  }, [dispatch]);
  return (
    <div className="container">
      <Tweets />
    </div>
  );
}
