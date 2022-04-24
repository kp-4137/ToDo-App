import DeleteButton from "./delete-button";
import PropTypes from 'prop-types';

const Todo = ({todo, onDelete}) => {
    return(
        <li className="todo">
            <h3 className="todo-title">{todo.title}</h3>
            <p className="todo-description">{todo.description}</p>
            <p className="todo-deadline">Due By:{todo.deadline}</p>
            <DeleteButton id={todo.id} onClick={onDelete}/>
        </li>
    );
}

Todo.propTypes = {
    todo: PropTypes.object,
    onDelete: PropTypes.func
}

export default Todo;