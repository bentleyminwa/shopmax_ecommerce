import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { hero } from "../../../../assets/images";
import { Button, SearchComponent } from "../../../../shared/components";
import { BannerVariants } from "../../../../shared/motion/motion";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <header className="relative">
      <SearchComponent />
      <motion.img
        variants={BannerVariants}
        initial="hidden"
        animate="visible"
        src={hero}
        alt="hero"
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute top-[60%] left-10 text-white space-y-3">
        <h2 className="text-5xl font-bold tracking-wide">Final Offer!</h2>
        <p className="tracking-wide">
          up to <span className="text-3xl text-black font-bold">50%</span> sale
          for all electronics
        </p>
        <Button onClick={() => navigate("shop")}>Shop Now</Button>
      </div>
    </header>
  );
};

export default Banner;
