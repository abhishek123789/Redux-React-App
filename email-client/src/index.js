import 'materialize-css/dist/css/materialize.css';
import React from 'react';
import ReactDOM from 'react-dom';
//Redux Provider
import { Provider } from 'react-redux';
// Redux store library
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
    
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers,{},applyMiddleware(reduxThunk))



ReactDOM.render(
    <Provider store = {store} ><App /></Provider>
    ,document.querySelector('#root')
);
