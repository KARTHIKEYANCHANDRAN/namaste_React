import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // this line also written as -- const resId = useParams.resId

  const [showIndex, setshowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info; // object destructuring and optional chaining

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCategory)

  return (
    <div className="w-1/2 m-auto my-2 font-bold text-lg text-center">
      <h1 className="text-red-500 ">{name}</h1>
      <h4>
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>

      {itemCategory.map((item, index) => (
        <RestaurantCategory
          key={item.card.card.id}
          data={item?.card?.card}
          showItems={index == showIndex ? true : false}
          index1 = {index}
          setshowIndex={(index) => setshowIndex(index)}
        />
      ))}

      {/* <ul className="flex flex-col flex-wrap">
        {/* Key should be used inside map function to avoid warning of id}
        {itemCards.map((item) => {
          return (
            <li
              className="bg-blue-300 font-medium m-3 text-center"
              key={item.card.info.id}
            >
              {" "}
              {item.card.info.name} - Rs :{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}{" "}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
