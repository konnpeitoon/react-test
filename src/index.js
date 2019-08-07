import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers';
import './App.css';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,
    document.getElementById('root')
);
