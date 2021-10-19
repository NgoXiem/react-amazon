import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Success() {
  const router = useRouter();
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div className="flex gap-3">
          <CheckCircleIcon className="text-green-500 w-10 h-10"></CheckCircleIcon>
          <h1 className="font-bold text-2xl">Successful payment!</h1>
        </div>
        <button className="btn" onClick={() => router.push("/")}>
          Continue shopping
        </button>
      </div>
    </>
  );
}
