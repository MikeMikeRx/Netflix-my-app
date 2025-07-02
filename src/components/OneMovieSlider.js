import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"


const OneMovieSlider = () =>{
    const [index, setIndex] = useState(0)
    const {image, title, description} = data[index]

    return <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>
            <FaArrowLeft />
        </button>
        <button>
            <FaArrowRight />
        </button>
    </div>
}

export default OneMovieSlider