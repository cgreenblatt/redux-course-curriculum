import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddTweet() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSetText = (e) => setText(e.target.value);
  const handleSubmit = (e) => {};

  return (
    <form>
      <textarea
        className="textarea"
        placeholder="What's happening?"
        value={text}
        onChange={handleSetText}
      ></textarea>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
