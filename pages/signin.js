import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Signin() {
  return (
    <div className="max-w-sm flex flex-col gap-5 justify-center items-center mx-auto">
      <div>
        <Link href="/">
          <a>
            <Image src="/logo.png" width={110} height={60}></Image>
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-4  border py-3 px-6">
        <h1 className="font-semibold text-2xl">Sign-In</h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Email address</label>
            <input type="text" className="border-2 py-1 px-2 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Password</label>
            <input type="password" className="border-2 py-1 px-2 rounded" />
          </div>
          <button
            type="submit"
            className="border bg-yellow-300 text-sm py-1 px-2 rounded hover:bg-yellow-400 transition-all"
          >
            Continue
          </button>
        </form>
        <p className="text-xs">
          By continue, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-sm text-center text-gray-500">New to Amazon?</p>
        <Link href="/signup">
          <button className=" rounded border text-sm w-full py-1 bg-gray-100 hover:bg-gray-200 transition-all">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

//background: #f0c14b;
//border-color: #a88734 #9c7e31 #846a29;
