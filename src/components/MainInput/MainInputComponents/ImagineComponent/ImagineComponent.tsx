import { useAppSelector } from "../../../../store/hook";
import "./ImagineComponent.scss"

export const ImagineComponent = () => {
  let imagine = useAppSelector(state => state.imgSlice.imgUploaded)
  return (
    <div className="ImgComponent">
          {imagine && (<img src={(imagine)} alt="imagine" />)}
    </div>
  );
};  
