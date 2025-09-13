import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ImageSlider() {
  const images = [
    "/images/central-hvac.jpg",
    "/images/centralized-fan.jpg",
    "/images/ductwork.jpg",
    "/images/vrf-copper.jpg",
    "/images/split-ac.jpg",
    "/images/cold-rooooom.jpg",
    "/images-2/garbage-door.jpg",
    "/images/fir-hydrant.jpg",
    "/images/Fire-Sprinkler-System.jpg",
    "/images/medical-outlet.jpg",
    "/images/grp-tanker.avif"
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 md:h-120 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
