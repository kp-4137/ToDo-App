import { useState } from "react";

const Form = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const createTodo = (e) => {
        e.preventDefault();
        const todo = {title, description, deadline};
        onAdd(todo);
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
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;