import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";
import Testimonial from "../components/Testimonial.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <motion.section
      className="container mx-auto px-4 py-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to MIDO Engineering PLC
      </h2>
      <p className="text-xl font-medium text-gray-800 mb-8">
        We provide top-notch electro-mechanical contracting services,
        specializing in HVAC, fire alarm & suppression, commercial
        refrigeration, medical gas supply, and garbage chute systems.
      </p>
      <div className="mb-8">
        <ImageSlider />
      </div>
      <Testimonial />
      <Footer />
    </motion.section>
  );
}

export default Home;
