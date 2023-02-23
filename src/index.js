import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className="border-container">
        <li className="border-item" style={{ background: 'var(--red)' }} />
        <li className="border-item" style={{ background: 'var(--blue)' }} />
        <li className="border-item" style={{ background: 'var(--pink)' }} />
        <li className="border-item" style={{ background: 'var(--yellow)' }} />
        <li className="border-item" style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ColorfulBorder />
    <App />
  </React.StrictMode>
);
