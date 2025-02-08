import { useEffect } from "react";
import { ProductList } from "../../shared/components";
import { Banner, FeaturedListings } from "./components";
import TestimonialComponent from "./components/Testimonial/Testimonial";

const Home = () => {
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
          <ProductList />
        </div>
      </section>
      <TestimonialComponent />
    </>
  );
};

export default Home;
