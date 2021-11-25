import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
//  let renderEntiretree=(state)=>{
  
   ReactDOM.render(
<BrowserRouter>
  
    <Provider store={store}>
    <App/>

  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
