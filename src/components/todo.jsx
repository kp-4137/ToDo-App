import DeleteButton from "./delete-button";

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

Todo.defaultProps = {
    title: 'Some Work',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere consequuntur incidunt aperiam delectus. Nostrum amet consequuntur placeat inventore atque!',
    deadline: '01/01/2022'
}

export default Todo;