import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseBoard from './BaseBoard';
import BoardSwitcher from './BoardSwitcher';
import BoardMatrix from './BoardMatrix';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BaseBoard />, document.getElementById('board-base'));
ReactDOM.render(<BoardSwitcher />, document.getElementById('board-item-switch-mode'));
ReactDOM.render(<BoardMatrix />, document.getElementById('board-item-units-panel'));

registerServiceWorker();
