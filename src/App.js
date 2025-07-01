import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () =>{
  
  const [typeOfMovie, setTypeOfMovie] = useState("akcion")

  const filteredMovies = allMovies.filter( (oneMovie) => {
    return oneMovie["category"] === typeOfMovie
  }) 


  return <div>
    {
      filteredMovies.map( (oneMovie)=>{
        const {id, image, title, age, tags, description} = oneMovie
        
        return <div>
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

export default App