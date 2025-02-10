import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../shared/components";
import { useProducts } from "../../shared/hooks/useProducts";
import { Banner, FeaturedListings, TestimonialComponent } from "./components";

const Home = () => {
  const { homeProducts: products } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <FeaturedListings />
      {/* product listings */}
      <section className="w-10/12 mx-auto pt-10">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wider w-fit border-b-2 pb-3">
            Featured Products
          </h2>
        </div>
        <div className="my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="mt-5">
            <Link to={"shop"} className="underline text-sm tracking-wider">
              View All
            </Link>
          </div>
        </div>
      </section>
      <TestimonialComponent />
    </>
  );
};

export default Home;
