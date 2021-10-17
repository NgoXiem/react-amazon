import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
export default function Checkout() {
  const { items } = useSelector((state) => state.basket);
  const { session } = useSession();
  const subTotal = items.reduce(
    (total, item) => (total = total + item.price),
    0
  );
  return (
    <>
      <Header></Header>
      <div className="md:grid grid-cols-12 mb-10">
        <div className="flex flex-col gap-5 col-span-9">
          {items.length > 0 ? (
            <p className="text-2xl font-bold my-5 mx-5">Your shoping basket</p>
          ) : (
            <p className="text-2xl font-bold my-5 mx-5">Your basket is empty</p>
          )}
          {items.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              price={item.price}
              title={item.title}
              description={item.description}
              prime={item.prime}
              image={item.image}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
        </div>
        <div className=" mt-5 col-span-3 justify-self-center border-l-2 px-2">
          <p className="font-semibold mb-2">Subtotal: &#36;{subTotal}</p>

          {session ? (
            <button className="btn">Proceed to checkout</button>
          ) : (
            <button
              className="bg-gradient-to-b from-gray-200 to-gray-600 px-2 py-1 rounded-sm cursor-not-allowed"
              disabled
            >
              Sign in to check out
            </button>
          )}
        </div>
      </div>
    </>
  );
}
