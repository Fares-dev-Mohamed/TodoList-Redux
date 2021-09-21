
import './App.css';

import React from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TodoList-React-Redux</h1>
      <AddTodo />
      <h1> What is our plan for today???</h1>
      <TodoList />
    </div>
  );
}

export default App;