import resObj from "../utils/mockdata";

import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import ResCard1 from "./ResCard1";

/* const ResCard = (props) => {
  console.log(props);
  return (
    <div className="rescard">
      <img className="img1" src={props.img} width="150" height="150" />
      <h4>{props.resname}</h4>
      <h5>{props.cuisine}</h5>
      <h5>4 star</h5>
    </div>
  );
}; */

const Body = () => {
  const [newresObj, setnewResObj] = useState([]);

  const [filteredRes, setfilteredRes] = useState([]);

  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0827989&lng=80.2754246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setnewResObj(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (filteredRes.length === 0) {
    return <Shimmer />;
  }

  function SearchButton() {
    const filteredSearch = newresObj.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    console.log(filteredSearch);
    if (filteredSearch !== 0) {
      setfilteredRes(filteredSearch);
    }
    if (filteredSearch == 0) {
      alert("No Restaurants Are There");
      setfilteredRes(newresObj);
    }
  }

  function FilterByRating() {
    const filterResRating = newresObj.filter((res) => res.info.avgRating > 4.3);

    if (filterResRating.length !== 0) {
      setfilteredRes(filterResRating);
    }
    if (filterResRating == 0) {
      alert("No High Rated Restaurants Available");
      setfilteredRes(newresObj);
    }
  }

  return (
    <div className="bodyContainer">
      <div className="itemContainer">
        <ItemCard />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search Here...."
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              {
                SearchButton();
              }
            }
          }}
        ></input>

        <button
          onClick={() => {
            {
              SearchButton();
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="filter-btn">
        <button
          onClick={() => {
            FilterByRating();
          }}
        >
          {" "}
          Filter Best Rated Restaurants above 4.3{" "}
        </button>
      </div>

      <div className="restaurantContainer">
        {filteredRes.map((restaurant) => {
          return <ResCard1 key={restaurant.info.id} resData={restaurant} />;
        })}

        {/* <ResCard
          resname="Akash Foods"
          cuisine="south indian"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
        />
        <ResCard
          resname="KFC"
          cuisine="American"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwspVL6wHxhr9d4FZkAiJ-mMGjwqcgwAuCNg&s"
        />
        <ResCard
          resname="Amul"
          cuisine="Ice Creams"
           />
      */}
      </div>
    </div>
  );
};

export default Body;
