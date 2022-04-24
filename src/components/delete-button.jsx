import PropTypes from 'prop-types';

const DeleteButton = ({id, onClick}) => {
    return(
        <button className="delete-button"
                onClick={() => onClick(id)}
                style={{color:"white", backgroundColor:"red", border:"none"}}>
            Delete
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.number,
    onClick: PropTypes.func
}

export default DeleteButton;