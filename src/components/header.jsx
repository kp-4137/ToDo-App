import PropTypes from 'prop-types';

const Header = ({remainingTasks}) => {
    return(
        <header className="App-header">
            <h1>Kishan's ToDo App</h1>
            <h3>Remaining Tasks: {remainingTasks}</h3>
        </header>
    );
}

Header.propTypes = {
    remainingTasks: PropTypes.number.isRequired
}

export default Header;