import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseBoard from './BaseBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<BaseBoard />, document.getElementById('board-base'));
registerServiceWorker();
