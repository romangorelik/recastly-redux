import ReactDOM from 'react-dom';
import { Provider } from '../node_modules/react-redux';
import React from 'react';
import AppContainer from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.


ReactDOM.render(
  <Provider store={store}>
    <AppContainer API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube}/>
  </Provider>,
  document.getElementById('app')
);

