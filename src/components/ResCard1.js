import { IMG_URL } from "../utils/constants";

const ResCard1 = (props) => {
  const { resdata } = props; //This line is equivalent to:   const resdata = props.resdata; (destructuring assignment)

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resdata?.info;

  /* above line is expanded as
    const cloudinaryImageId = resdata?.info?.cloudinaryImageId;
    const name = resdata?.info?.name;
    const cuisines = resdata?.info?.cuisines;
    const avgRating = resdata?.info?.avgRating;
    const costForTwo = resdata?.info?.costForTwo;  */

  return (
    <div className="rescard" data-testid="resCard">
      <img className="img1 " src={IMG_URL + cloudinaryImageId} />
      <p className="nameStyle p-1">{name}</p>
      <p
        style={{ fontStyle: "italic" }}
        className="whitespace-nowrap text-ellipsis overflow-hidden p-1"
      >
        {cuisines.join(", ")}
      </p>
      <p className="p-1" style={{ fontWeight: "bold" }}>
        {avgRating} star
      </p>
      <p className="p-1" style={{ fontWeight: "bold" }}>
        {costForTwo}
      </p>
    </div>
  );
};

export const withPromotedData = (ResCard1) => {
  return (props) => {
    return (
      <div>
        <label className="rounded-md mx-5 absolute text-white bg-black">
          {" "}
          Promoted{" "}
        </label>
        <ResCard1 {...props} />
      </div>
    );
  };
};

export default ResCard1;
