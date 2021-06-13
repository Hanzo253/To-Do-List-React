import "./App.css";
import { useState } from "react";
import Todos from "./Todos.js";
import Button from "./Button";
import AddTodo from "./AddTodo";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Doctors Appointment",
      date: "August 19th at 5:00pm",
      checked: false,
    },
    {
      id: 2,
      name: "Go to School",
      date: "May 2nd at 11:30am",
      checked: false,
    },
    {
      id: 3,
      name: "Shop for Food",
      date: "June 7th at 4:25pm",
      checked: false,
    },
  ]);

  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  // Delete Function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Checked
  const toggleChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Show Add Todo
  const displayAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  // Clear all Todos
  const clearTodoList = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1 className="display-5 text-center">To Do List</h1>
      <Button
        onAdd={displayAddTodo}
        showAddTodo={showAddTodo}
        text={showAddTodo ? "Close" : "Add Todo"}
        className={showAddTodo ? "btn btn-danger" : "btn btn-success"}
        onClear={clearTodoList}
      />
      {showAddTodo && <AddTodo onAdd={addTodo} />}
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleChecked} />
      ) : (
        <p className="text-info fw-bold">"No Todos are made"</p>
      )}
      <p className="text-center text-primary text-wrap">
        Double click the todo to get it checked
      </p>
    </div>
  );
}

export default App;
