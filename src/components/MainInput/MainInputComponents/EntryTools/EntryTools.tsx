import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";
import { GetImg } from "./GetImg/GetImg";
import "./EntryTools.scss";

type EntryToolsProps = {
  mainState: boolean;
};

export const EntryTools = ({ mainState }: EntryToolsProps) => {
  return (
    <div
      className="Main__wrapper"
      style={mainState ? { display: "none" } : { display: "flex" }}
    >
      <div className="item">
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
