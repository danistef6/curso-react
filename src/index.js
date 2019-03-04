import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootSaga from './sagas'
import { Router, Route } from 'react-router-dom';
import {createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import  createSagaMiddleware from "redux-saga"
import  thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import history from './utils/history';
import rootReducer from './rootReducer'
//import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare, thunk))
)

sagaMiddleWare.run(rootSaga)

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
        <Route component={App}/>
        </Provider>
    </Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
