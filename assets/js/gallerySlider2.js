import Swiper from "swiper";
import {
  Autoplay,
  EffectCoverflow,

} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";


const gallerySlider = new Swiper(".gallery-slider2", {
  modules: [Autoplay, EffectCoverflow],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop: true,
  speed: 800,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
 

});
