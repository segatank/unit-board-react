import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import BaseBoard from './BaseBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  //const divBase = document.createElement('div');
  //ReactDOM.render(<BaseBoard />, div);
});
