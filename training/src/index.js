import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import {store} from "./redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </Provider>
  
);


