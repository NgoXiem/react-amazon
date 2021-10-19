import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { selectItems, selectTotal } from "../redux/basketSlice";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(`${process.env.stripe_public_key}`);
const stripePromise = loadStripe(
  "pk_test_51JlwV2D8kipzXDifJKcwzI6EXeFmUwbvj5ilBsI1bWJiuZyzNhDFcuiSQTRSqXYVVRkN7yCYGC9Z2J6ZPHGZDwv700yXlEKYxe"
);
export default function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const subTotal = useSelector(selectTotal);

  // Call the backend to create a checkout session
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    // Redirect user to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

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
        <div className=" mt-5 mx-5 sm:mx-1 col-span-3 justify-self-center md:border-l-2 px-2">
          <p className="font-semibold mb-2">Subtotal: &#36;{subTotal}</p>

          {session ? (
            <div className="flex flex-col gap-3">
              <button className="btn" onClick={createCheckoutSession}>
                Proceed to checkout
              </button>
              <div className="text-sm italic text-red-500">
                <p className="whitespace-nowrap">
                  Test card: 4242 4242 4242 4242
                </p>
                <p>CVC: any 3 digits</p>
                <p>Date: any future date</p>
              </div>
            </div>
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
