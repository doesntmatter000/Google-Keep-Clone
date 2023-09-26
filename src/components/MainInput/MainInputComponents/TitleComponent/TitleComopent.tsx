import "./TitleComopent.scss";
import { TitleInput } from "./components/TitleInput/TitleInput";

type TitleComopentProps = {
  comoponentState: boolean
  paddingT?: number
}

export const TitleComopent = ({comoponentState, paddingT}:TitleComopentProps) => {

  return (
    <div className="Tcomponent" style={comoponentState ? {display: "block", paddingTop: `${paddingT}px`} : {display: "none"}}>
        <TitleInput/>
    </div>
  );
};
