import { useAppSelector } from "../../../../store/hook";
import "./ImagineComponent.scss"

type ImagineComponentProps = {
  mainState: boolean
}
export const ImagineComponent = ({mainState}:ImagineComponentProps) => {
  console.log(mainState);
  
  let imagine = useAppSelector(state => state.imgSlice.imgUploaded)
  return (
    <div className="ImgComponent" style={mainState ? {display: "block"} : {display: "none"}}>
          {imagine && (<img src={(imagine)} alt="imagine" />)}
    </div>
  );
};  
