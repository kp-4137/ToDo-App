import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

const Header = () => {
    const [todos, setTodos] = useContext(TodoContext);

    return(
        <header className="App-header">
            <h1>Kishan's ToDo App</h1>
            <h3>Remaining Tasks: {todos.length}</h3>
        </header>
    );
}

export default Header;