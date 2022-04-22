import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kishan's ToDo App</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;