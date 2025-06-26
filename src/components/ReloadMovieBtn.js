import "./ReloadMovieBtn.css"

const ReloadMovieBtn = (props)=>{
    return(
        <button className="main-reload-btn" onClick={props.reloadMovies}>Reload All</button>
    )
}

export default ReloadMovieBtn