import Todo from "./todo";

const TodoList = ({todos, onDeleteTodo}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (<Todo key={todo.id} todo={todo} onDelete={onDeleteTodo}/>)
                )}
            </ul>
        </div>
    );
}

export default TodoList;