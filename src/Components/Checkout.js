import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router";

export default function Checkout() {
  const items = useSelector((state) => state.cart.cartItems);
  console.log(items);

  return (
    <div className="min-h-screen  flex justify-center p-6">
      <div className="w-full max-w-200">
        <div className="flex items-center gap-5 mb-6">
            <Link to="/restaurant">
            <div className=" z-10 cursor-pointer ">
            <IoArrowBackCircleOutline size={30} className="text-[#ff5200]" />
          </div>
          </Link>
          <h1 className="text-2xl font-bold text-start">Your Cart</h1>
        </div>

        {items?.length == 0 ? (
          <p className="text-gray-500 text-lg text-center">
            Your Cart is Empty
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between items-center border">
              <h1 className="text-lg font-semibold">Total Amount</h1>
              <span className="text-xl font-bold text-[#ff5200]">
                &#8377;
                {items?.reduce(
                  (acc, item) =>
                    acc + (item.defaultPrice/100 || item.price/100) * item.qty,0
                )}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
