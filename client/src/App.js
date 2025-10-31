import React from 'react';
import './App.css';
import InputTodo from './Components/InputTodo';
import ListTodo from './Components/ListTodo';

function App() {
  return (
    <div className="container mt-5"><InputTodo/><ListTodo /></div>
  );
}

export default App;
