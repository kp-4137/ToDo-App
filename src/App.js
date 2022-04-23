import { useState } from "react";
import "./App.css";
import Header  from "./components/header";
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState(
    [
        {
            id: 1,
            title: "Learn React",
            description: "A JavaScript Library for building User Interfaces.",
            deadline: "04/30/2022"
        },
        {
            id: 2,
            title: "Create Project",
            description: "A todo app using React",
            deadline: "04/23/2022"
        },
        {
            id: 3,
            title: "Learn Swift",
            description: "A programming language to create native applications for Apple devices.",
            deadline: "05/31/2022"
        }
    ]
  );

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const addTodo = (todo) => {
    const id = todos.length ? todos[todos.length-1].id + 1 : 1;
    todo = {id, ...todo};
    console.log(todo);
    setTodos([...todos,todo]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAdd={addTodo}/>
      <TodoList todos={todos} onDeleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;