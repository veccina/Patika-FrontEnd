import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`${todo.done ? 'completed' : ''} flex items-center p-4 border-b border-gray-300 transition-all duration-200 ease-in-out`}>
      <input
        className="toggle mr-4"
        type="checkbox"
        checked={todo.done}
        onChange={toggleTodo}
      />
      <label className="flex-1 text-gray-800 text-lg font-bold">{todo.text}</label>
      <button className="destroy ml-4 text-red-500 hover:text-red-700 cursor-pointer transition-all duration-200 ease-in-out" onClick={deleteTodo}>
        &#10005;
      </button>
    </li>
  );
};

export default TodoItem;
