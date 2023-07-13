import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";
import "./EntryTools.scss";
import { GetImg } from "./GetImg/GetImg";

type EntryToolsProps = {
  comoponentState: boolean;
};

export const EntryTools = ({ comoponentState }: EntryToolsProps) => {
  return (
    <div
      className="Main__wrapper"
      style={comoponentState ? { display: "none" } : { display: "flex" }}
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
