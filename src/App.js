import { useState } from "react";
import Todo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (text) => {
    if (text) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: text,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  const toggleTask = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <div className='App'>
      <header>
        <h1>Количество задач № {todos.length}</h1>
      </header>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;