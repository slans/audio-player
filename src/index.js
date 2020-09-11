import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const posts = [
  { id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!' },
  { id: 2, title: 'Установка', content: 'React можно установить из npm.' }
];

ReactDOM.render(
  <App posts={posts}/>,
  document.getElementById('root')
);