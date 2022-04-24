import "./App.css";
import Header  from "./components/header";
import Form from "./components/form";
import TodoList from "./components/todo-list";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Header />
        <Form />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;