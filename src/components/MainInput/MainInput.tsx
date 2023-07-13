import { useRef } from "react";
import { EntryTools, ImagineComponent, MainTools, TitleComopent, TitleIcon } from "./MainInputComponents";
import "./MainInput.scss";
import { useToggleMainInput } from "../../Tools/CustomHooks.ts/useToggleMainInput";


export const MainInput = () => {
  
  let mainRef = useRef<HTMLDivElement>(null);
  const { mainIsOpen, setMainIsOpen, imgToggleMainOpen } = useToggleMainInput(mainRef);

  return (
    <div className="Main" ref={mainRef}>
      <TitleIcon imgBool={imgToggleMainOpen} mainStateBool={mainIsOpen}/>
      <ImagineComponent />
      <TitleComopent comoponentState={mainIsOpen || imgToggleMainOpen}/>
      <div className="entry__wrapper">
        <input
          className="Main__input"
          placeholder="Creeaza o notă..."
          onClick={() => setMainIsOpen(true)}
        />
        <EntryTools comoponentState={mainIsOpen} />
      </div>
      {/* <MainTools/> */}
    </div>
  );
};
