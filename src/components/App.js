import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { handleReceiveData } from '../actions/shared';
import Tweets from './Tweets';
import NewTweet from './NewTweet';
import NavBar from './NavBar';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleReceiveData());
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Tweets />} />
          <Route path="/new" element={<NewTweet />} />
        </Routes>
      </div>
    </Router>
  );
}
