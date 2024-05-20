import React, { useState } from 'react';
import amblem from '../assets/amblem.svg'; // Amblem resminin yolunu belirtin

const Header = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <header className="header">
      <div className="flex justify-center items-center mb-4">
        <img src={amblem} alt="Amblem" className="amblem" />
        <h1 className="text-6xl" style={{ color: '#4CAF50' }}>todos</h1> {/* Renk amblemle uyumlu */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
