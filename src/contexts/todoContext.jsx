import { useReducer, createContext } from "react";
import AppReducer from "./appReducer";
import initialTodos from "./initialTodos.json";

const initialState = {
    todos: initialTodos
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