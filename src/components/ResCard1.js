import { IMG_URL } from "../utils/constants";

const ResCard1 = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="rescard">
      <a href="#">
        <img className="img1" src={IMG_URL + cloudinaryImageId} height="150" />
        <p className="nameStyle" >{name}</p>
        <p style={{ fontStyle: "italic" }} className="cui">
          {cuisines.join(", ")}
        </p>
        <p style={{ fontWeight: "bold" }}>{avgRating} star</p>
        <p style={{ fontWeight: "bold" }}>{costForTwo}</p>
      </a>
    </div>
  );
};

export default ResCard1;
