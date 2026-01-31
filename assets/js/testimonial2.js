import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

  const testimonial2 = new Swiper(".testimonial2-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
  speed:800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".testimonial2-next",
      prevEl: ".testimonial2-prev",
    },



  modules: [Navigation, Autoplay],
});
