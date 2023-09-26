import { useState } from "react";
import { LuPin, LuPinOff } from "react-icons/lu";
import "./TitleIcon.scss";

type TitleIconProps = {
  mainState: boolean;
};

export const TitleIcon = ({ mainState }: TitleIconProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  
  return (
    <></>
    // <div
    //   className="wrapper__svg title__icon"
    //   onClick={() => setToggleIcon(!toggleIcon)}
    //   style={mainState ? { display: "block" } : { display: "none" }}
    // >
    //   <div className="title__svg">{toggleIcon ? <LuPinOff /> : <LuPin />}</div>
    // </div>
  );
};
