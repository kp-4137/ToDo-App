import "./App.css";
import Header  from "./components/header";
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;