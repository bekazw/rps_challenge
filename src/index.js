import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.css';

//redux
import initReducer from './redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(initReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

