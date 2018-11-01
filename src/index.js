import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/main/Main';
import Menu from './components/menu/Menu'
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import './styles/main.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import thunk from 'redux-thunk';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <div>
            <Menu page='Main page'/>
            <Router>
                <Route exact path='/' component={Main}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
