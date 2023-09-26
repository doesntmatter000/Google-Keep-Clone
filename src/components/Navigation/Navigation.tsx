import "./Navigation.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ToggleShowCards } from "./components/ToggleShowCards/ToggleShowCards";
import { SwithTheme } from "./components/SwithTheme/SwithTheme";
import { SearchBar } from "./components/SeachBar/SearchBar";
import { useAppSelector } from "../../store/hook";
import { DefaultNavTitle } from "../UiComponents/DefaultNavTitle";
import { NavComponentTitle } from "../UiComponents/NavComponentTitle";

export const Navigation = () => {
    const TitleComponents = useAppSelector(state => state.NavigationTitles.TitleData)
    
    return (
        <div className="Nav">
            <div className="FlexWrapperLeft">
                <div className="FlexWrapperLeft__innerWrapper">
                    <div className="FlexWrapperLeft__MenuIcon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    {TitleComponents.text === "default" 
                    ? (<DefaultNavTitle/>)
                    : (<NavComponentTitle text={`${TitleComponents.text}`} key={crypto.randomUUID()}/>)}
                    <SearchBar/>
                </div>
            </div>

            <div className="FlexWrapperRight">
                <ToggleShowCards />
                <SwithTheme/>
            </div>
        </div>
    )
}
