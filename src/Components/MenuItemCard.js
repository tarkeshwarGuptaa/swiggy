import { useDispatch, useSelector } from "react-redux";
import { addItem, decrement, increament } from "../store/slices/cartSlice";

export default function MenuItemCard({ itemCard }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const item = items.find((val) => val.id == itemCard.id);

  function handleAdd() {
    dispatch(addItem(itemCard));
  }

  function handleIncrement() {
    dispatch(increament(itemCard));
  }

  function handleDecrement() {
    dispatch(decrement(itemCard));
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-[10%] items-center">
        <div className="w-[70%] ">
          <h3 className="text-lg font-semibold text-[#02060CEB] mb-1">
            {itemCard?.name}
          </h3>
          <h3 className="font-semibold mb-1.5">
            &#x20B9;{" "}
            {itemCard?.defaultPrice
              ? itemCard?.defaultPrice / 100
              : itemCard?.price / 100}
          </h3>
          <span className="inline-flex">
            <svg
              className="w-3.5 h-3.5 fill-current text-green-700"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
          <span className="text-green-700 font-bold text-sm">
            {itemCard?.ratings?.aggregatedRating?.rating
              ? itemCard?.ratings?.aggregatedRating?.rating
              : "0"}{" "}
          </span>
          <span className="text-sm text-gray-500">
            (
            {itemCard?.ratings?.aggregatedRating?.ratingCountV2
              ? itemCard?.ratings?.aggregatedRating?.ratingCountV2
              : "0"}
            )
          </span>
          <p className=" w-full h-8 truncate  mt-1 text-gray-500">
            {itemCard?.description}
          </p>
        </div>
        {/* <div className="w-[20%] relative ">
          <img
            className="w-40 h-36 object-cover rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${itemCard.imageId}`}
          ></img>
          {item ? (
            <div
              className="w-[60%] absolute bottom-[-8%] left-[15%] bg-white
                 font-semibold text-xl py-2 px-4 rounded-xl text-green-500 border  border-gray-300 flex gap-5 justify-evenly"
            >
              <button className="w-32 h-7  text-lg font-bold  hover:bg-gray-100 rounded transition-colors active:scale-90"   onClick={handleDecrement}>-</button>
              <span>{item.qty}</span>
              <button className="w-32 h-7  text-lg font-bold  hover:bg-gray-100 rounded transition-colors active:scale-90" onClick={handleIncrement} >+</button>
            </div>
          ) : (
            <button
              className="w-[60%] absolute bottom-[-8%] left-[15%] bg-white
                 font-semibold text-xl py-2 px-4 rounded-xl text-green-500 border  border-gray-300"
              onClick={handleAdd}
            >
              ADD
            </button>
          )}
        </div> */}

        <div className="relative shrink-0 w-28 h-24 sm:w-36 sm:h-32 md:w-40 md:h-36 flex flex-col items-center">
  <img
    className="w-full h-full object-cover rounded-2xl"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/${itemCard.imageId}`}
  />

  {item ? (
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 bg-white text-green-600 font-bold rounded-xl shadow-md border border-gray-200 flex items-center justify-between py-1 px-1 select-none">
      <button
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors active:scale-90"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-sm sm:text-base font-extrabold text-green-600">
        {item.qty}
      </span>
      <button
        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold text-green-600 hover:bg-gray-100 rounded-lg transition-colors active:scale-90"
        onClick={handleIncrement}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 bg-white font-extrabold text-sm sm:text-base md:text-lg py-1.5 sm:py-2 rounded-xl text-green-600 border border-gray-200 shadow-md hover:bg-gray-50 active:scale-95 transition-all text-center tracking-wide"
      onClick={handleAdd}
    >
      ADD
    </button>
  )}
</div>

      </div>
      <hr className="my-4 "></hr>
    </div>
  );
}
