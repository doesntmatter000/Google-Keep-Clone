import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../../../store/hook";
import { uploadImg } from "../../../../../store/Slices/imgSlice";

export const GetImg = () => {

  const dispatch = useAppDispatch()

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(uploadImg(e.target!.result));
      };
      reader.readAsDataURL(file);
    }
  };

  
  return (
    <label className="label" htmlFor="file">
      <div>
        <input
          type="file"
          id="file"
          accept="/image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <FontAwesomeIcon icon={faImage} />
      </div>
    </label>
  );
};
