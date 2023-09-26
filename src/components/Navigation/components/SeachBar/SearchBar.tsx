import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState} from "react"
import './SearchBar.scss'


export const SearchBar = () => {

    const [inputValue, setInputValue] = useState("")

    return (
        <div className="SearchBar">
            <div className="SearchBar__Find">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Caută" value={inputValue}/>
            <div className="SearchBar___Clear">
                <FontAwesomeIcon icon={faXmark} onClick={() => setInputValue("")}/>
            </div>
        </div>
    )
}

