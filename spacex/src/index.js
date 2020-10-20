import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <TodoApp /> */}
  </React.StrictMode>,
  document.getElementById('root'),
  // ()=>console.log('test ReactDOM.render cb')
);
