import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './state.js'

 let renderEntiretree=(state)=>{
  
   ReactDOM.render(
  <React.StrictMode>
    <App state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
  </React.StrictMode>,
  document.getElementById('root')
);}
renderEntiretree(store.getState())

store.subscribe(renderEntiretree);


reportWebVitals();


