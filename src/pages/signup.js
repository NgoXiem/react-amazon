import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { app } from "../lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [match, setMatch] = useState(false);
  const isInvalid =
    name === "" ||
    email === "" ||
    password === "" ||
    reEnterPassword !== password;
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    if (
      reEnterPassword !== password &&
      reEnterPassword.length > 0 &&
      password.length > 0
    ) {
      setError("Password and re-entered password not match");
      setMatch(false);
    } else if (
      reEnterPassword.length > 0 &&
      password.length > 0 &&
      reEnterPassword === password
    ) {
      setMatch(true);
      setError(null);
    }
  }, [password, reEnterPassword]);

  const handleChange = (e) => {
    setReEnterPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        router.push("/");
      })
      .catch((error) => {
        setError(error.message);
        setEmail("");
        setPassword("");
        setReEnterPassword("");
        setName("");
      });

    // updateProfile(auth.currentUser, {
    //   displayName: name,
    // })
    //   .then(() => {
    //     console.log("profile updated");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
        <h1 className="font-semibold text-2xl">Create account</h1>
        <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
          {error && <div className="text-sm">{error}</div>}
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Your name</label>
            <input
              type="text"
              className="border-2 py-1 px-2 rounded focus:outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
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
              className="border-2 py-1 px-2 rounded text-sm focus:outline-none"
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm focus:outline-none">
              Re-enter password
            </label>
            <input
              type="password"
              className={` focus:outline-none border-2 py-1 px-2 rounded ${
                match ? "border-blue-500" : "border-red-500"
              }`}
              onChange={(e) => handleChange(e)}
              value={reEnterPassword}
            />
          </div>
          <button
            type="submit"
            className={`border bg-yellow-300 text-sm py-1 px-2 rounded hover:bg-yellow-400 transition-all ${
              isInvalid ? "opacity-70" : ""
            }`}
            disabled={isInvalid}
          >
            Create your Amazon account
          </button>
        </form>
        <p className="text-xs">
          By creating an account, you agree to Amazons Conditions of Use and
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
