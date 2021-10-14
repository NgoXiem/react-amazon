import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { app } from "../lib/firebase";
import { useRouter } from "next/dist/client/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const isInvalid = email === "" || password === "";
  const router = useRouter();
  const auth = getAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setEmail("");
        setPassword("");
      });
  };

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
        <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Email address</label>
            <input
              type="text"
              className="border-2 py-1 px-2 rounded focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Password</label>
            <input
              type="password"
              className="border-2 py-1 px-2 rounded focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className={`border bg-yellow-300 text-sm py-1 px-2 rounded hover:bg-yellow-400 transition-all ${
              isInvalid ? "opacity-70" : ""
            }`}
            disabled={isInvalid}
          >
            Continue
          </button>
        </form>
        <p className="text-xs">
          By continue, you agree to Amazons Conditions of Use and Privacy
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
