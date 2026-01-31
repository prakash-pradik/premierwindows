import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

  const testimonial2 = new Swiper(".testimonial-slider", {
    
    spaceBetween: 20,
    loop: true,
  speed:800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },

breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  modules: [Navigation, Autoplay],
});
