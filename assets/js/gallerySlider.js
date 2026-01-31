import { Autoplay } from "swiper/modules";

const swiper = new Swiper(".gallerySlider", {
    
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  speed: 1000,

  effect: "coverflow",
module:[Autoplay],
autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true,
  },
breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  
  },

});
