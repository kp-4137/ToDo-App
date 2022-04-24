import { useState, useContext } from "react";
import { TodoContext } from '../contexts/todoContext';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const [todos, setTodos] = useContext(TodoContext);

    const addTodo = (todo) => {
        const id = todos.length ? todos[todos.length-1].id + 1 : 1;
        todo = {id, ...todo};
        setTodos([...todos,todo]);
    }

    const createTodo = (e) => {
        e.preventDefault();
        const todo = {title, description, deadline};
        addTodo(todo);
        setTitle('');
        setDescription('');
        setDeadline('');
    }

    return(
        <form onSubmit={createTodo}>
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       className="todo-input"
                       name="title"/>
            </div>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea className="todo-input"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="deadline">Deadline</label>
                <input type="date"
                       className="todo-input"
                       value={deadline}
                       onChange={(e) => setDeadline(e.target.value)}
                       name="deadline"/>
            </div>
            <button className="todo-button" type="submit" style={{color:"white", backgroundColor:"green", border:"none"}}>
                Add
            </button>
        </form>
    );
}

export default Form;