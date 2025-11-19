import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

const testimonials = [
  {
    name: "Colonel Elvin Peterson",
    title: "Ex Military",
    text: "I recently purchased a tactical rifle and accessories from ROSHFIRE, and I’m impressed with the quality. The staff was knowledgeable, helped me choose the right gear.",
    image: user1,
  },
  {
    name: "Steven Rockfire",
    title: "Security Expert",
    text: "As a first-time buyer, I was nervous about purchasing online, but the experience with ROSHFIRE was flawless. Their secure checkout and discreet packaging put me at ease.",
    image: user2,
  },
  {
    name: "Aevel Hamstring",
    title: "Field Instructor",
    text: "ROSHFIRE truly offers the best value. I spent weeks comparing prices on a specific shotgun model, and they were consistently the lowest. It's my new go-to store.",
    image: user3,
  },
];

// Using swiper.js for the slider
export default function Testimonials() {
  return (
    <div className="bg-black text-white py-10 text-center">
      <h2 className="text-4xl font-bold mb-10">Testimonials</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-[95vw] mx-auto md:w-[85vw] lg:w-[700px] "
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 rounded-2xl bg-black shadow-lg relative">
              <p className="text-gray-300 mb-8">{t.text}</p>
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-yellow-400 font-semibold text-lg">
                {t.name}
              </h3>
              <p className="text-sm text-gray-400">{t.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
