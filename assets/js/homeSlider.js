import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const mainSwiper = new Swiper(".myMainSwiper", {
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  speed: 3000,  
  

  modules: [Autoplay, EffectFade, Pagination],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".homeSwiper-pagination",
    clickable: true,
  },
});
