import 'babel-polyfill';
import './bower_components/promise-polyfill/promise';
import './bower_components/fetch/fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './app/reducers/reducer';
import App from './app/components/App';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById('personal-app')
);