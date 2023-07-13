import { useState } from "react";
import { LuPin, LuPinOff } from "react-icons/lu";
import "./TitleIcon.scss";

type TitleIconProps = {
  imgBool: boolean
  mainStateBool: boolean
}

export const TitleIcon = ({imgBool, mainStateBool}:TitleIconProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  if (imgBool === true) {

  }

  return (
    <div className="wrapper__svg title__icon"  onClick={() => setToggleIcon(!toggleIcon)}>
      <div className="title__svg">{toggleIcon ? <LuPinOff /> : <LuPin />}</div>
    </div>
  );
};
