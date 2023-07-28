import { useState} from "react";
import React from "react";
import "./MainInput.scss";

type openMainInputProps = {
  openMainInput: Function;
  mainInputState: boolean
};

export const MainInput = ({ openMainInput, mainInputState }: openMainInputProps) => {

    const [inputValue, setInputValue] = useState<string | null>("")

    const handleEvent = (e: React.FormEvent<HTMLDivElement>, defaultHeight: string) => {
      e.currentTarget.style.height = defaultHeight;
      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
      setInputValue(e.currentTarget.textContent)
      
    };

    

  return (
    <div className="MainInput__wrapper">
        <span className={!mainInputState ? "MainInput__Placeholder" : "MainInput__PlaceholderOpen"}
                style={inputValue === "" ? {display: "block"} : {display: "none"}}>
            Creeaza o notă...
        </span>
      <div
        onInput={(event) => handleEvent(event, "45px")}
        className="Main__input"
        onClick={() => openMainInput()}
        contentEditable={true}
        aria-placeholder="Creeaza o notă..."
      ></div>
    </div>
  );
};
