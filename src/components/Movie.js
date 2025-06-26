import "./Movie.css"
import data from "../data"

const Movie = () => {
    return <div className="all-movies">
        {
            data.map((oneMovie)=>{
                const {id, image, title, age, tags, description} = oneMovie

                return <div className="one-movie" key={id}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p>{description}</p>

                </div>
            })
        }
    </div>
}

export default Movie