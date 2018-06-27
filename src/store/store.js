import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import dd from '../../spec/data/exampleVideoData.json'

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(rootReducer, {currentVideo: dd[0]}, applyMiddleware(thunk));

export default store;