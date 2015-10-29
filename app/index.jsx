import './main.css';
import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import configureStore from './libs/configureStore';

main();

function main() {
  const store = configureStore();
  const app = document.getElementById('root');
  document.body.appendChild(app);

  ReactDOM.render(<Provider store={store}><App /></Provider>, app);
}
