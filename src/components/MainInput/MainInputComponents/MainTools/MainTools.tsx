import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetImg } from "../EntryTools/GetImg/GetImg";
import {
  faBoxArchive
} from "@fortawesome/free-solid-svg-icons";
import "./MainTools.scss"
import { useToggleMainInput } from "../../../../Tools/CustomHooks.ts/useToggleMainInput";
import { CustomTheme } from "./CustomTheme/CustomTheme";
import { useAppSelector } from "../../../../store/hook";

type ToolProps = {
  mainState: boolean
}
export const MainTools = ({mainState}:ToolProps) => {
  const color = useAppSelector(state => state.mainInputState.backcolor)
  const {closeMainInput} = useToggleMainInput()
  
  return (
    <div className="Tools" style={mainState ? {display: "flex", backgroundColor: `${color}`} : {display: "none"}}>
      <div className="wrapper__tools">
        <div className="wrapper__tools-item item">
            <GetImg/>
        </div>

        <div className="wrapper__tools-item item">
           <FontAwesomeIcon icon={faBoxArchive} />
        </div>

        <div className="wrapper__tools-item item">
          <CustomTheme/>
        </div>
      </div>
      <button className="Tools__button" onClick={() => closeMainInput()}>Închide</button>
    </div>
  )
}
