const DeleteButton = ({id, onClick}) => {
    return(
        <button className="delete-button"
                onClick={() => onClick(id)}
                style={{color:"white", backgroundColor:"red", border:"none"}}>
            Delete
        </button>
    );
}

export default DeleteButton;