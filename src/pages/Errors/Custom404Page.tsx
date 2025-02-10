import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components";

const Custom404Page = () => {
  const navigate = useNavigate();

  return (
    <section className="w-10/12 mx-auto h-[60vh] flex justify-center items-center text-center">
      <div className="md:w-2/3 space-y-5 border border-gray-200 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-semibold">
          Uh-oh! This page doesn't exist.
        </h2>
        <p className="font-semibold text-gray-500 tracking-wide">
          Even the best explorers sometimes take a wrong turn! But don't
          worry—we'll help you find your way back.
        </p>
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </div>
    </section>
  );
};

export default Custom404Page;
