import { useState } from "react";

export const TitleInput = () => {
  const [titleValue, setTitleValue] = useState<string>("")
  const handleEvent = (e: React.ChangeEvent<HTMLTextAreaElement>,defaultHeight: string) => {
    e.target.style.height = defaultHeight;
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTitleValue(e.target.value)
  };

  return (
    <>
      <div className="Tcomponent__title" style={titleValue === "" ? {display: "block"} : {display: "none"}}>Titlu</div>
      <textarea
        onChange={(event) => handleEvent(event, "35px")}
        className="Tcomponent__title-text"
        required
      />
    </>
  );
};
