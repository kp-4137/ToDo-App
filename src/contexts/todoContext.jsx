import { useReducer, createContext } from "react";
import AppReducer from "./appReducer";

const initialState = {
    todos: [
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
}

export const TodoContext = createContext(initialState);

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTodo = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        });
    }

    const addTodo = (todo) => {
        dispatch({
            type: "ADD_TODO",
            payload: todo
        });
    }

    return(
        <TodoContext.Provider value={{
            todos: state.todos,
            deleteTodo,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}