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
  const app = document.createElement('main');
  document.body.appendChild(app);

  ReactDOM.render(
    <div>
      <Provider store={store}><App /></Provider>
    </div>,
    app
  );
}
