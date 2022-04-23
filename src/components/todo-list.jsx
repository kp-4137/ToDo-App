import { useState } from "react";
import Todo from "./todo";

const TodoList = () => {
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