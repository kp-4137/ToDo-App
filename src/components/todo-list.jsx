import Todo from "./todo";
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

const TodoList = () => {
    const {todos, deleteTodo} = useContext(TodoContext);

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