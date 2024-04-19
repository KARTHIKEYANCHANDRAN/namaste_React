import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
          width="150px"
          height="100px"
          alt="scooter"
        />
      </div>
      <div className="search">search</div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "76702",
      name: "The Red Box",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/cddcd780-d166-4313-868f-77716620b000_76702.jpg",
      locality: "Wellington Estate",
      areaName: "Egmore",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      parentId: "1636",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 01:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-red-box-wellington-estate-egmore-chennai-76702",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "806891",
      name: "Pizza Hut",
      cloudinaryImageId: "978358a0d0caba4f4555b8e2147b467d",
      locality: "Anna Salai",
      areaName: "Triplicane",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-18 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-anna-salai-triplicane-chennai-806891",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "594211",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_594211.JPG",
      locality: "EVR Periyar Salai",
      areaName: "Chennai Central",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-evr-periyar-salai-chennai-central-chennai-594211",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37972",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_37972.jpg",
      locality: "Anna Salai",
      areaName: "Egmore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-anna-salai-egmore-chennai-37972",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "403038",
      name: "Grameen Kulfi",
      cloudinaryImageId: "uozny4cpkeug9etrvblf",
      locality: "Bc Press Road",
      areaName: "Royapuram",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-04-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-bc-press-road-royapuram-chennai-403038",
      type: "WEBLINK",
    },
  },
];

const ResCard1 = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="rescard">
      <img
        className="img1"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        width="150"
        height="150"
      />
      <h4>{name}</h4>
      <h5 className="cui">{cuisines.join(",")}</h5>
      <h5>{avgRating} star</h5>
    </div>
  );
};

const ResCard = (props) => {
  console.log(props);
  return (
    <div className="rescard">
      <img className="img1" src={props.img} width="150" height="150" />
      <h4>{props.resname}</h4>
      <h5>{props.cuisine}</h5>
      <h5>4 star</h5>
    </div>
  );
};

const ItemCard = () => {
  return (
    <div className="itemcontainer">
      <div className="itemcard">
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
        </a>
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"></img>
        </a>
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"></img>
        </a>
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"></img>
        </a>
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"></img>
        </a>
        <a href="#">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"></img>
        </a>
        <hr />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="itemContainer">
        <ItemCard />
      </div>

      <div className="restaurantContainer">
        {resObj.map((restaurant) => {
          console.log(restaurant);
          return <ResCard1 key={restaurant.info.id} resData={restaurant} />;
        })}

        <ResCard
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
          img="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ height: "100px", margin: "0px", width: "100%" }}
      // style values should be enclosed in quotes
    ></div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {Footer()}{" "}
      {/* another way to call a function in jsx; comments should also be enclosed insode braces*/}
    </div>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("react"));
console.log(root1);
root1.render(AppLayout());
/* here u can directly call the function like given or use <AppLayout /> inside render()  */
