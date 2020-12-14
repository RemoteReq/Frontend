// import 'core-js/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
// this should be the only .scss file to import and linting is disabled for this import
import style from '#scss/index.scss'; // eslint-disable-line
import App from './components/App.jsx';

console.log('BASE URL', process.env.BASE_URL);

ReactDOM.render(<App />, document.getElementById('App'));