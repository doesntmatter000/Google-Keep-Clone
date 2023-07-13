import "./TitleComopent.scss";
import { TitleInput } from "./components/TitleInput/TitleInput";

type TitleComopentProps = {
  comoponentState: boolean
}

export const TitleComopent = ({comoponentState}:TitleComopentProps) => {

  return (
    <div className="Tcomponent" style={comoponentState ? {display: "block"} : {display: "none"}}>
        <TitleInput/>
    </div>
  );
};
