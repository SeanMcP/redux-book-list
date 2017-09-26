//react imports
import React from 'react';
import ReactDOM from 'react-dom';


import './styles/index.css';



//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//import promise from 'redux-promise';

//react router imports
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


//components
import App from './components/App';


const createStoreWithMiddleware = applyMiddleware()(createStore);

//switch uses most specific route that matches, top down.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
