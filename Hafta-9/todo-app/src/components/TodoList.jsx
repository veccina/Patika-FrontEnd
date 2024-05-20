import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={() => toggleTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
