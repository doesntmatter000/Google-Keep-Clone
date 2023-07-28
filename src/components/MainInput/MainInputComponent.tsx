import { useRef } from "react";
import {
  EntryTools,
  ImagineComponent,
  MainTools,
  TitleComopent,
  TitleIcon,
  MainInput,
  ToDoList,
} from "./";
import "./MainInputComponent.scss";
import { useToggleMainInput } from "../../Tools/CustomHooks.ts/useToggleMainInput";
import { useAppSelector } from "../../store/hook";

export const MainInputComponent = () => {
  const backImage = useAppSelector((state) => state.mainInputState.backImage);
  const mainRef = useRef<HTMLDivElement>(null);
  const { imgToggleMainOpen, mainState, openMainInput, toggleToDoState, toDoState } = useToggleMainInput(mainRef);

  return (
    <div className="Main" ref={mainRef}>
      <div className="Main__innerWrraper">
        <TitleIcon mainState={mainState} />
        <ImagineComponent mainState={mainState || imgToggleMainOpen} />
        <div
          className="wrapper"
          style={backImage ? {backgroundImage: `${backImage}`} : { backgroundImage: "none" }}>
          <div className="ddd">
            <TitleComopent comoponentState={mainState} />
            <ToDoList toDoState={toDoState} />
            <div className="entry__wrapper" style={toDoState ? { display: "none" } : { display: "flex" }}>
              <MainInput
                openMainInput={openMainInput}
                mainInputState={mainState}
              />
              <EntryTools mainState={mainState || imgToggleMainOpen} toggleToDoState={toggleToDoState} />
            </div>
          </div>
        </div>     
      </div>
      <MainTools mainState={mainState || imgToggleMainOpen} />
    </div>
  );
};
