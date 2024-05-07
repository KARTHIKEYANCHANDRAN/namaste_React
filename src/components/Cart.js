import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="font-bold text-2xl w-1/2 m-auto text-center ">
      <h1>Cart</h1>
      <button
        className="p-1 m-2 bg-black font-normal text-white rounded-md "
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty , go and add some tasty food</h1>}
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
