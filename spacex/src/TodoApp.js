import React, { useState } from 'react';
import TodoList from './TodoList.js';

const TodoApp = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoInput = document.getElementById('new-todo');
    if (todoInput.value) {
      const newItem = {
        text: todoInput.value,
        id: Date.now(),
      };
      setItems((items) => items.concat(newItem));
    }
    todoInput.value = '';
  };
  return (
    <div>
      <h3>Список дел</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Что нужно сделать?</label>
        <br />
        <input id="new-todo" value={items.text} />
        <button>Добавить #{items.length + 1}</button>
      </form>
      <TodoList items={items} />
    </div>
  );
};

export default TodoApp;
