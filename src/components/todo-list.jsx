import Todo from "./todo";
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      }

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (<Todo key={todo.id} todo={todo} onDelete={deleteTodo}/>)
                )}
            </ul>
        </div>
    );
}

export default TodoList;