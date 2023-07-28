import { useRef } from "react";
import { faDropletSlash, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../../store/hook";
import { useOptions } from "./useOptions";
import "./Options.scss";

export const Options = () => {

  const prevBackground = useRef<HTMLButtonElement>(null)  
  const prevColor = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsState = useAppSelector(
    (state) => state.mainInputState.optionsToggle
  );
  const { colors, images, switchColor, switchBackground } = useOptions(
    wrapperRef,
    prevColor,
    prevBackground
  );


  return (
    <div
      className="options"
      style={optionsState ? { display: "block" } : { display: "none" }}
      ref={wrapperRef}
    >
      <div className="options__colors">
        <button
          onClick={(e) => switchColor(e.currentTarget)}
          className="color__item default"
          ref={prevColor}
        >
          <FontAwesomeIcon icon={faDropletSlash} />
        </button>
        {colors.map((item, index) => (
          <button
            key={index}
            onClick={(e) => switchColor(e.currentTarget)}
            className="color__item"
            style={{ backgroundColor: `${item}` }}
          ></button>
        ))}
      </div>
      <div className="options__back">
        <button
          onClick={(e) => switchBackground(e.currentTarget)}
          className="back__item default"
          ref={prevBackground}
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
        {images.map((item, index) => (
          <button
            key={index}
            onClick={(e) => switchBackground(e.currentTarget)}
            className="back__item"
            style={{ backgroundImage: `url(${item})` }}
          ></button>
        ))}
      </div>
    </div>
  );
};
