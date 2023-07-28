import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";
import { GetImg } from "./GetImg/GetImg";
import "./EntryTools.scss";

type EntryToolsProps = {
  mainState: boolean;
  toggleToDoState: (a:boolean) => void
};

export const EntryTools = ({ mainState, toggleToDoState }: EntryToolsProps) => {
  return (
    <div
      className="Main__wrapper"
      style={mainState ? { display: "none" } : { display: "flex" }}
    >
      <div className="item" onClick={() => toggleToDoState(true)}>
        <div>
          <FontAwesomeIcon icon={faSquareCheck} />
        </div>
      </div>

      <div className="item">
        <div>
          <FontAwesomeIcon icon={faPaintbrush} />
        </div>
      </div>

      <div className="item">
        <GetImg/>
      </div>
    </div>
  );
};
