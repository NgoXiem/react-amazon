import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/basketSlice";
export default function CheckoutProduct({
  id,
  image,
  title,
  description,
  price,
  prime,
  rating,
}) {
  const item = { id, image, title, description, price, prime, rating };
  const dispatch = useDispatch();
  const addItemtoBasket = () => {
    dispatch(addToBasket(item));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 gap-3 px-1">
      <img
        src={image}
        alt=""
        className="w-20 h-20 object-contain col-span-1 place-self-center"
      ></img>
      <div className="col-span-3 flex flex-col gap-1 text-sm">
        <p className="font-bold">{title}</p>
        <div className="flex flex-row text-yellow-400">
          {Array(rating)
            .fill("girl", 0)
            .map((item, index) => (
              <StarIcon className="w-5" key={index}></StarIcon>
            ))}
        </div>
        <p className="line-clamp-2 ">{description}</p>
        <p className="font-bold">&#36; {price}</p>
        {prime && (
          <div className="flex flex-row space-x-4 items-center">
            <img src="/prime.png" alt="prime" className="w-10" />
            <p className="text-sm">Free Delivery</p>
          </div>
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-3 ml-3 place-self-center">
        <button className="btn text-sm" onClick={() => addItemtoBasket()}>
          Add
        </button>
        <button className="btn text-sm" onClick={() => removeItemFromBasket()}>
          Remove
        </button>
      </div>
    </div>
  );
}
