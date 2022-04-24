import Todo from "./todo";
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleteTodo: PropTypes.func
}

export default TodoList;