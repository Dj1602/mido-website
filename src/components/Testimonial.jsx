import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Gulelat Tefera",
    feedback:
      "We have found MIDO to be competent and better performing professionals regarding HVAC systems installation with provision of qualified working staff, well-developed work methodology, safety and health practices along with excellent communication.",
    company: "Santa Maria Construction PLC",
  },
  {
    name: "Mekbin Amare",
    feedback:
      "We acknowledge and appreciate MIDO's dedication in supplying and installing ventilation systems to the satisfaction of the Bank.",
    company: "Berhan Bank S.C",
  },
  {
    name: "Mohammed",
    feedback:
      "The Company brought along good expertise in coldroom refrigeration systems that involved on-time project completion, up-to-standard installation, greater understanding and knowledge of the system while also training the staff thoroughly.",
    company: "Mega Supply Engineering PLC",
  },
  {
    name: "Belay Shimeles",
    feedback:
      "Outstanding technical and project management abilities in fire alarm systems!",
    company: "Osha Construction PLC",
  },
  {
    name: "Tadesse Ayalew",
    feedback:
      "Technically and professionally capable duct work and ventilation system contractors!",
    company: "YBM Construction Management Consultant PLC",
  },
  {
    name: "Tarekegn Wakishum",
    feedback:
      "MIDO has shown good understanding and expertise in cold room chain technologies as well as proper welding and support for pipe works (stainless steel andmild steel). Furthermore, we have received continious support and training to our staff in the factory.",
    company: "Helen Agro Industries",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
        aria-label="testimonial-slider" // ✅ Improves accessibility
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-6 text-center">
            <p className="text-lg italic text-gray-700">
              "{testimonial.feedback}"
            </p>
            <h4 className="mt-4 text-xl font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
