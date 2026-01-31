// import "preline";
import AOS from "aos";
import "aos/dist/aos.css";
import "./testimonial.js";
import "./testimonial2.js";
import "./homeSlider.js";
import "./gallerySlider.js";
import "./gallerySlider2.js";
import "./work.js";
import "./bannerSlider.js";
import Lenis from 'lenis';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// text scroll anim 
const text = new SplitType('.headline', { types: 'words, chars' });



gsap.utils.toArray(".headline").forEach((headline) => {
  gsap.from(headline.querySelectorAll(".char"), {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.6)",
    stagger: {
      each: 0.04,
      from: "center" // letters wave from center outward
    },
    scrollTrigger: {
      trigger: headline,
      start: "top 80%",
      once: true
    }
  });
});


gsap.utils.toArray(".image-anim").forEach((img) => {
  gsap.from(img, {
    rotationY: 180,       
    opacity: 0,
    duration: 1.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      once: true
    }
  });
});





  //  AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    AOS.init({
      once: true,
      duration: 700,
      offset: 100,
    });

    window.dispatchEvent(new Event("resize"));
    AOS.refresh();
  }, 500);
});





//back to top Start
var toTopButton = document.getElementById("to-top-button");

if (toTopButton) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      toTopButton.classList.remove("hidden");
    } else {
      toTopButton.classList.add("hidden");
    }
  };

  window.goToTop = function () {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// lenis for function 

const lenis = new Lenis({
  duration: 3,    
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smoothWheel: true,  
  smoothTouch: true,  
  touchMultiplier: 1.5,   
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



