import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faGrip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import "./ToggleShowCards.scss"

export const ToggleShowCards = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    return (
        <div className="CardsToggle" onClick={() => setToggleIcon(!toggleIcon)}>
            {!toggleIcon 
            ?<FontAwesomeIcon icon={faGrip} />  
            :<FontAwesomeIcon icon={faGripLines}/>}
        </div>
    )
}
