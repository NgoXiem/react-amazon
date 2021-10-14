import React from "react";
import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-amazon_blue-default flex flex-row gap-5 items-center py-2 px-3">
      <div className="pt-2 flex flex-grow">
        <Link href="/" className=" cursor-pointer">
          <a>
            <Image
              src="/amazon.png"
              height={35}
              width={90}
              className="border border-amazon_blue-default hover:border-current"
            ></Image>
          </a>
        </Link>
      </div>
      <div className="hidden sm:flex flex-grow rounded-md items-center justify-items-stretch bg-yellow-500 overflow-hidden">
        <form className="rounded-l-md flex flex-grow">
          <input type="text" className="py-2 px-2 w-full focus:outline-none" />
          <button type="submit" className="px-2 hover:bg-yellow-600 ">
            <SearchIcon className="h-6 w-6 cursor-pointer" />
          </button>
        </form>
      </div>
      <div className="flex flex-row space-x-5 whitespace-nowrap text-white text-sm ">
        <div className="border-amazon_blue-default hover:border-current border cursor-pointer p-1">
          <Link href="/signin">
            <p>Hello, Sign in</p>
          </Link>
          <p className="font-bold">Account & List</p>
        </div>
        <div className=" border-amazon_blue-default hover:border-current border cursor-pointer p-1">
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="border-amazon_blue-default flex items-center hover:border-current border cursor-pointer p-1">
          <ShoppingCartIcon className="w-8 h-8" />
          <p className="font-bold">Cart</p>
        </div>
      </div>
    </div>
  );
}
