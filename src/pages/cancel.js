import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
export default function Cancel() {
  const router = useRouter();
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <h1 className="font-bold text-2xl">The payment has been cancelled!</h1>
        <button className="btn" onClick={() => router.push("/")}>
          Continue shopping
        </button>
      </div>
    </>
  );
}
