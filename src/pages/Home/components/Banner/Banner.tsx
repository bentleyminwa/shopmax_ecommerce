import { useNavigate } from "react-router-dom";
import { hero } from "../../../../assets/images";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <header className="relative">
      <form className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="search products"
          className="border border-gray-200 my-5 p-3 w-1/2 md:w-1/3 rounded-sm focus:outline-none text-gray-500 tracking-wider"
        />
      </form>
      <img src={hero} alt="hero" className="w-full h-[60vh] object-cover" />
      <div className="absolute top-[60%] left-10 text-white space-y-3">
        <h2 className="text-5xl font-bold tracking-wide">Final Offer!</h2>
        <p className="tracking-wide">
          up to <span className="text-3xl text-black font-bold">50%</span> sale
          for all electronics
        </p>
        <button
          onClick={() => navigate("shop")}
          className="bg-black p-3 uppercase text-sm tracking-widest cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Banner;
