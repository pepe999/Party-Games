import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
// import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './redux/store'

import history from './history'
import { Router } from 'react-router-dom'


export const render = (Component: ComponentType<any>) => {

  ReactDOM.render(
    <React.Fragment>
      <Provider store={store}>
            <Router history={history}>
              <Component />
            </Router>
      </Provider>
    </React.Fragment>,
    document.getElementById('root')
  )
}

render(App)

// ReactDOM.render(
// <Provider store={store}>
//     <Router history={history}>
//               <App />
//     </Router>
//   </Provider> , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
