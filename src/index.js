import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
// import { PostsProvider } from './store/PostsProvider';

const AppWithRouter = () => (
  <BrowserRouter>
    {/* <PostsProvider> */}
      <App />
    {/* </PostsProvider> */}
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
