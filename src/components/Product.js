import React, { useState } from "react";
import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";
export default function Product({ product }) {
  const [random] = useState(Math.floor(Math.random() * 5 + 1));
  const [prime] = useState(Math.random() < 0.5);
  return (
    <div className="relative grid grid-cols-1 gap-2 bg-white px-5 pt-3 pb-5 rounded-sm overflow-hidden">
      <p className="capitalize absolute left-0 text-white font-semibod p-1 text-xs bg-amazon_blue-light rounded-br-sm">
        {product.category}
      </p>
      <div className="pt-5 flex flex-col items-center">
        <Image
          src={product.image}
          height={200}
          width={200}
          objectFit="contain"
        ></Image>
      </div>
      <p className="font-bold">{product.title}</p>
      <div className="flex flex-row text-yellow-400">
        {Array(random)
          .fill("girl", 0)
          .map((item, index) => (
            <StarIcon className="w-5" key="index"></StarIcon>
          ))}
      </div>
      <p className="line-clamp-2 ">{product.description}</p>
      <p className="font-bold">&#36; {product.price}</p>
      {prime && (
        <div className="flex flex-row space-x-4 items-center">
          <img src="/prime.png" alt="prime" className="w-14" />
          <p className="text-sm">Free Delivery</p>
        </div>
      )}
      <button className="font-semibold rounded-sm py-1 bg-gradient-to-t from-yellow-500 to-yellow-100 hover:to-yellow-500">
        Add to cart
      </button>
    </div>
  );
}
