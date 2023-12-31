import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);
