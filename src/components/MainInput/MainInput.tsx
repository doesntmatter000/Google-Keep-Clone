import { useRef } from "react";
import {
  EntryTools,
  ImagineComponent,
  MainTools,
  TitleComopent,
  TitleIcon,
} from "./MainInputComponents";
import "./MainInput.scss";
import { useToggleMainInput } from "../../Tools/CustomHooks.ts/useToggleMainInput";
import { useAppSelector } from "../../store/hook";

export const MainInput = () => {
  const backImage = useAppSelector((state) => state.mainInputState.backImage);
  const mainRef = useRef<HTMLDivElement>(null);
  const { imgToggleMainOpen, mainState, openMainInput } =
    useToggleMainInput(mainRef);
  console.log(mainState, "mainstate", imgToggleMainOpen, "img");

  return (
    <div className="Main" ref={mainRef}>
      <TitleIcon mainState={mainState} />
      <ImagineComponent mainState={mainState || imgToggleMainOpen} />
      <div
        className="wrapper"
        style={
          backImage
            ? {
                backgroundImage: `${backImage}`,
                backgroundPositionX: "right",
                backgroundPositionY: "bottom",
                backgroundSize: "cover",
              }
            : { backgroundImage: "none" }
        }
      >
        <div>
        <TitleComopent comoponentState={mainState} />
        <div className="entry__wrapper">
          <input
            className="Main__input"
            placeholder="Creeaza o notă..."
            onClick={() => openMainInput()}
          />
          <EntryTools mainState={mainState || imgToggleMainOpen} />
        </div>
        </div>

      </div>
      <MainTools mainState={mainState || imgToggleMainOpen} />
    </div>
  );
};
