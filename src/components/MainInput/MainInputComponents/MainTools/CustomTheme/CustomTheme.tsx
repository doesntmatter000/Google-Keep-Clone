import {
    faPalette, faDropletSlash, faImage
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import './CustomTheme.scss'
import { useState, useEffect, useRef } from "react";
import { changeBackColor, changeBackImage } from "../../../../../store/features";
import { useAppDispatch } from "../../../../../store/hook";
export const CustomTheme = () => {
  const dispatch = useAppDispatch()

  const colors = [
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed"
  ]

  const images = [
    "https://www.gstatic.com/keep/backgrounds/grocery_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/food_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/music_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/recipe_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/notes_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/places_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/travel_light_0614.svg",
    "https://www.gstatic.com/keep/backgrounds/video_light_0609.svg",
    "https://www.gstatic.com/keep/backgrounds/celebration_light_0714.svg",
  ]
  const wrapperRef = useRef<HTMLButtonElement>(null)
  const [toggleOptions, setToggleOptions] = useState(false)
  useEffect(() => {
    let handler = (e: Event) => {
            if (!wrapperRef.current?.contains(e.target as Node)) {
              setToggleOptions(false)
            }
    }
    document.addEventListener("mousedown", handler)
})

let prevColor = useRef<HTMLButtonElement | null>(null) 
let prevBackground = useRef<HTMLButtonElement | null>(null)
const switchColor = (e:HTMLButtonElement) => {
  if (prevColor.current) {prevColor.current.style.borderColor = "transparent"}
  e.style.borderColor = "#ad5af5"
  prevColor.current = e
  dispatch(changeBackColor(e.style.backgroundColor))
}

const switchBackground = (e:HTMLButtonElement) => {
  if (prevBackground.current) {prevBackground.current.style.borderColor = "transparent"}
  e.style.borderColor = "#ad5af5"
  prevBackground.current = e
  dispatch(changeBackImage(e.style.backgroundImage))
}


  return (
    <button className="Theme__wrapper" onClick={() => setToggleOptions(true) } ref={wrapperRef}>
        <FontAwesomeIcon icon={faPalette} />
        <div className="options" style={toggleOptions ? {display: "block"} : {display: "none"}}>
            <div className="options__colors">
              <button onClick={(e => switchColor(e.currentTarget))} className="color__item default" ref={prevColor}>
               <FontAwesomeIcon icon={faDropletSlash} />
              </button>
              {colors.map((item, index) => (<button key={index} onClick={(e => switchColor(e.currentTarget))} className="color__item" style={{backgroundColor: `${colors[index]}`}}></button>))}
            </div>
            <div className="options__back">
              <button onClick={(e => switchBackground(e.currentTarget))} className="back__item default" ref={prevBackground}>
                <FontAwesomeIcon icon={faImage} />
              </button>
              {images.map((item, index) => (<button key={index} onClick={(e => switchBackground(e.currentTarget))} className="back__item" style={{backgroundImage: `url(${images[index]})`}}></button>))}
            </div>
        </div>
    </button>
  )
}
