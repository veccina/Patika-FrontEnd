import React from 'react';

const Footer = ({ todos, clearCompleted, setFilter }) => {
  const activeTodos = todos.filter(todo => !todo.done).length;
  const completedTodos = todos.filter(todo => todo.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodos}</strong> {activeTodos === 1 ? 'item' : 'items'} left
      </span>
      <ul className="filters flex space-x-2">
        <li><a className="cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-200 ease-in-out" onClick={() => setFilter('all')}>All</a></li>
        <li><a className="cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-200 ease-in-out" onClick={() => setFilter('active')}>Active</a></li>
        <li><a className="cursor-pointer text-gray-500 hover:text-blue-500 transition-all duration-200 ease-in-out" onClick={() => setFilter('completed')}>Completed</a></li>
      </ul>
      <button className="clear-completed text-red-500 hover:text-red-700 transition-all duration-200 ease-in-out" onClick={clearCompleted}>
        Clear completed ({completedTodos})
      </button>
    </footer>
  );
};

export default Footer;
