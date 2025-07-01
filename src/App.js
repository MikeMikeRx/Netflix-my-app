import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () =>{
  
  const [typeOfMovie, setTypeOfMovie] = useState("comedy")

  const filteredMovies = allMovies.filter( (oneMovie) => {
    return oneMovie["category"] === typeOfMovie
  }) 

  console.log(filteredMovies)

  return <div>

   </div>
  
}

export default App