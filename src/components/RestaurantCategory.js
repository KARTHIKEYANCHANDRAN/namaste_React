import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , index1, setshowIndex}) => {
  
 

  const handleClick = () => {
    

    if(showItems == false){
    setshowIndex(index1);
    }
    if(showItems == true){
        setshowIndex(null);
        
    }
  };

  // console.log(data.itemCards);
  return (
    <div className="m-4 p-4 bg-gray-100 shadow-md ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        {}
      </div>
      <div className="text-left font-normal">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
