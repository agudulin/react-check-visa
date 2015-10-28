import './main.css';
import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
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
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    app
  );
}
