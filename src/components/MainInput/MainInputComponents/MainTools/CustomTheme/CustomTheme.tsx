import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomTheme.scss";
import { useAppDispatch } from "../../../../../store/hook";
import { toggleOptions } from "../../../../../store/Slices/mainInputSlice";

export const CustomTheme = () => {
  
  const dispatch = useAppDispatch()

  return (
    <button className="Theme__wrapper" onClick={() => dispatch(toggleOptions(true))}>
      <FontAwesomeIcon icon={faPalette} />
    </button>
  );
};
