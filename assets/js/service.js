import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".myServiceSwiper ", {
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  speed:800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".service-pagination",
    clickable: true,
  },

  modules: [Pagination, Autoplay],
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
});
