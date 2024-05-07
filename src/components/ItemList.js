import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
         data-testid="fooditems"
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 flex flex-wrap justify-center"
        >
          <div className="w-9/12">
            <span className="font-semibold">{item.card.info.name} -</span>
            <span>
              {" "}
              Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs italic line-clamp-2 hover:line-clamp-6 ">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 p-3 relative">
            <img
              className="w-full h-23 "
              src={IMG_URL + item.card.info.imageId}
            />
            <button className="ml-6 mt-0 center  px-2 text-sm  bg-black text-white rounded-md " 
            onClick={()=>{ dispatch(addItem(item))}}>
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
