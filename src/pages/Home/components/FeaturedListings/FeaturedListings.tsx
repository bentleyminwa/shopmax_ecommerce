import { useNavigate } from "react-router-dom";
import { appData } from "../../../../assets/data/data";

const FeaturedListings = () => {
  const { featuredCategories } = appData;
  const navigate = useNavigate();

  return (
    <section className="w-10/12 max-h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-auto">
      {featuredCategories.map((feature) => {
        return (
          <div key={feature.title} className="border border-gray-200 relative">
            <img
              src={feature.image}
              alt=""
              className="w-full h-[40vh] object-cover"
            />
            <div className="absolute top-0 right-0 p-5 space-y-3">
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <p>
                <span className="text-xl font-bold">50%</span> off
              </p>
              <button
                onClick={() => navigate("shop")}
                className="bg-black p-3 uppercase text-sm tracking-widest cursor-pointer text-white"
              >
                Shop Now
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedListings;
