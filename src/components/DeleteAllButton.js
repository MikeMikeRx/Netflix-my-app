import "./DeleteAllButton.css"

const DelleteAllButton =(props)=>{
    return (
        <button className="main-delete-btn" onClick={props.deleteMovies}>Delete All</button>
    )
}


export default DelleteAllButton