import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Signup() {
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
        <h1 className="font-semibold text-2xl">Create account</h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Your name</label>
            <input type="text" className="border-2 py-1 px-2 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Email address</label>
            <input type="text" className="border-2 py-1 px-2 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Password</label>
            <input
              type="password"
              className="border-2 py-1 px-2 rounded text-sm"
              placeholder="At least 6 characters"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Re-enter password</label>
            <input type="password" className="border-2 py-1 px-2 rounded" />
          </div>
          <button
            type="submit"
            className="border bg-yellow-300 text-sm py-1 px-2 rounded hover:bg-yellow-400 transition-all"
          >
            Create your Amazon account
          </button>
        </form>
        <p className="text-xs">
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/signin">
            <a className="text-blue-500">Sign-in</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
