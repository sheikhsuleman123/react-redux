import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';

import store from './redux/store/store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /> </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <App2 />, document.getElementById('root')
// );


serviceWorker.unregister();
