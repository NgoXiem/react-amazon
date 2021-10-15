import Header from "../components/Header";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
};

function HomePage({ products }) {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Banner></Banner>
      <div className="grid grid-cols-1 grid-flow-row-dense gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28 lg:-mt-52 px-5">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}

        <img src="../../ad.jpg" className="md:col-span-full"></img>

        <div className="md:col-span-2">
          {products.slice(4, 5).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>

        {products.slice(5, products.length).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
