import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseBoard from './BaseBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BaseBoard />, document.getElementById('root'));

registerServiceWorker();
