import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouter = () => (
  <BrowserRouter>
      <App />
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
