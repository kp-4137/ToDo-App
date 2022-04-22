import Todo from "./todo";

const TodoList = () => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
                <Todo />
                <Todo title="Learn React" />
                <Todo title="Create Project" description="A todo app using React" deadline="04/23/2022" />
            </ul>
        </div>
    );
}

export default TodoList;