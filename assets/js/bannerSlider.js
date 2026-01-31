import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const mainSwiper = new Swiper(".bannerSlider", {
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  speed: 3000,  
  

  modules: [Autoplay, EffectFade, Navigation],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".bannerSlider-next",
      prevEl: ".bannerSlider-prev",
    },

});


