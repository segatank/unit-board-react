import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseBoard from './BaseBoard';
//import BoardSwitcher from './switcher/BoardSwitcher';
//import BoardMatrix from './board_matrix/BoardMatrix';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BaseBoard />, document.getElementById('root'));
//ReactDOM.render(<BoardSwitcher />, document.getElementById('board-item-switch-mode'));
//ReactDOM.render(<BoardMatrix />, document.getElementById('board-item-units-panel'));

registerServiceWorker();
