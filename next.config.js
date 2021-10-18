module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },

  envi: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
