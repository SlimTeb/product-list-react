import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import './scss/styles.scss'
import {BrowserRouter} from "react-router-dom";
import rootReducer from './reducers/index'
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'))