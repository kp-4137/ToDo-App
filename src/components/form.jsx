const Form = () => {
    return(
        <form>
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" className="todo-input" name="title"/>
            </div>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea className="todo-input" name="description"/>
            </div>
            <div className="form-control">
                <label htmlFor="deadline">Deadline</label>
                <input type="date" className="todo-input" name="deadline"/>
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