// const cors = require("cors");
// const express = require("express");
// const app = express();
// const corsOpts = {
//   origin: "*",
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOpts));

/////// Create a checkout session here
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => {
    return {
      description: item.description,
      quantity: 1,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JlyJiD8kipzXDifaQ4FgA7J"],
    shipping_address_collection: { allowed_countries: ["GB", "US", "CA"] },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email: email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  // res.redirect(303, session.url);
  res.status(200).json({ id: session.id });
};
