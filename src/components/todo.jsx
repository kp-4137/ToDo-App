import DeleteButton from "./delete-button";

const Todo = ({title, description, deadline}) => {
    return(
        <li className="todo">
            <h3 className="todo-title">{title}</h3>
            <p className="todo-description">{description}</p>
            <p className="todo-deadline">Due By:{deadline}</p>
            <DeleteButton />
        </li>
    );
}

Todo.defaultProps = {
    title: 'Some Work',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere consequuntur incidunt aperiam delectus. Nostrum amet consequuntur placeat inventore atque!',
    deadline: '01/01/2022'
}

export default Todo;