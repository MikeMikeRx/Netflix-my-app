import "./MovieDeleteButton.css"

const MovieDeleteButton = (props)=>{
    return (
        <button className="movie-delete-btn" onClick={props.deleteMovie}>Delete Movie</button>
    )
}


export default MovieDeleteButton