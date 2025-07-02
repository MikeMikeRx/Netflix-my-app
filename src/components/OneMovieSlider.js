import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"


const OneMovieSlider = () =>{
    const [index, setIndex] = useState(0)
    const {image, title, description} = data[index]

    const nextMovie = ()=>{
        setIndex((index) => {
            const newIndex = index + 1
            return newIndex
        })
    }

    const prevMovie = ()=>{
        setIndex ((index)=>{
            const newIndex = index -1
            return newIndex
        })
    }

    return <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={prevMovie}>
            <FaArrowLeft />
        </button>
        <button onClick={nextMovie}>
            <FaArrowRight />
        </button>
    </div>
}

export default OneMovieSlider