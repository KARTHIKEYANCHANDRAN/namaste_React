import resObj from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import ResCard1, { withPromotedData } from "./ResCard1";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
  // console.log("entered 1");

  const [newresObj, setnewResObj] = useState([]);

  const [filteredRes, setfilteredRes] = useState([]);

  const [searchValue, setsearchValue] = useState("");

  const ResCardPromoted = withPromotedData(ResCard1);

  const { loginusername } = useContext(UserContext);

  const { setusername } = useContext(UserContext);

  //  console.log("entered 2");

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("entered 3");

  useEffect(() => {
    SearchButton();
  }, [searchValue]);

  // console.log("entered 4");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0827989&lng=80.2754246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setnewResObj(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Your Internet Connection lost...</h1>;
  }

  if (filteredRes.length == 0) {
    // console.log("entered shimmer");
    return <Shimmer />;
  }

  function SearchButton() {
    const filteredSearch = newresObj.filter((res) => {
      return (
        res.info.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        res.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    // console.log(filteredSearch);
    if (filteredSearch !== 0) {
      setfilteredRes(filteredSearch);
    }
    if (filteredSearch == 0 && searchValue !== "") {
      //   alert("No Restaurants Are There");
      setfilteredRes(newresObj);
    }
  }

  // console.log("entered 5");

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

  // console.log("entered 10");

  return (
    <div className="bg-neutral-100">
      <div>
        <input
          className="w-1/4 rounded-md m-auto p-2 border-s-violet-500 absolute top-11 left-40  hover:shadow-xl hover:outline-1"
          type="text"
          data-testid="searchInput"
          placeholder="Search Here...."
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        ></input>
      </div>

      <div className="filter-btn ml-24 p-3">
        <button
          className=" rounded-lg bg-green-400 cursor-pointer p-3 hover:bg-green-700 hover:text-white"
          onClick={() => {
            FilterByRating();
          }}
        >
          {" "}
          Filter Restaurants above 4.3 Rating{" "}
        </button>

        <input
          type="text"
          className="border border-black mx-5 rounded-lg p-3"
          value={loginusername}
          onChange={(e) => setusername(e.target.value)}
        ></input>
      </div>

      {/* Key should be used inside map function to avoid warning of id*/}
      <div className="flex flex-wrap justify-center">
        {filteredRes.map((restaurant) => {
          //console.log(restaurant);
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurant/" + restaurant.info.id}
            >
              {" "}
              {restaurant.info.isOpen ? (
                <ResCardPromoted resdata={restaurant} />
              ) : (
                <ResCard1 resdata={restaurant} />
              )}{" "}
            </Link>
          );
        })}

        <hr></hr>

        <div>
          <ItemCard />
        </div>

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
