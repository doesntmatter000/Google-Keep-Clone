import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../../../store/hook";
import { uploadImg } from "../../../../../store/Slices/imgSlice";

export const GetImg = () => {

  const dispatch = useAppDispatch()
  
  return (
    <label className="label" htmlFor="file">
      <div>
        <input
          type="file"
          id="file"
          accept="/file/*"
          onChange={(e) => {
            if (e.target.files !== null) {
              dispatch(uploadImg(URL.createObjectURL(e.target.files[0])))
            }
          }}
          style={{ display: "none" }}
        />
        <FontAwesomeIcon icon={faImage} />
      </div>
    </label>
  );
};
