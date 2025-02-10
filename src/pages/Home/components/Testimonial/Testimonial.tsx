import { motion } from "motion/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { appData } from "../../../../assets/data/data";
import { TestimonialVariants } from "../../../../shared/motion/motion";

const TestimonialComponent = () => {
  const { testimonials } = appData;

  return (
    <section className="w-full mb-10">
      <h2 className="text-2xl font-bold uppercase tracking-wider text-center">
        <span className="border-b-2 pb-3">What Our Customers Say</span>
      </h2>
      <div className="bg-gray-200 w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {testimonials.map((testimonial) => (
          <motion.div
            variants={TestimonialVariants}
            initial="hidden"
            whileInView="visible"
            key={testimonial.name}
            className="bg-white p-10 rounded-lg space-y-5"
          >
            <div className="text-2xl bg-gray-100 w-fit p-5 rounded-full">
              <RiDoubleQuotesL />
            </div>
            <p className="tracking-wide text-gray-700">{testimonial.message}</p>
            <div className="flex items-center gap-5">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <h4 className="text-sm font-semibold tracking-wider">
                {testimonial.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialComponent;
