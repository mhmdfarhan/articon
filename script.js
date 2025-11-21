gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// split elements with the class "split" into words and characters
let split = SplitText.create(".split", { type: "words, chars" });

// now animate the characters in a staggered fashion
gsap.from(split.chars, {
  duration: 1, 
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05 // 0.05 seconds between each
});

// person hero
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".s2",
    start: "top center",     // ketika section2 mencapai tengah layar
    end: "bottom center",
    markers: true,           // tampilkan marker
    scrub: 1,                // ikuti scroll
  }
});

 // Sequence animasi
tl.to(".person", {
  duration: 1,
  // opacity: 1,
  y: 0,
  ease: "power2.out"
});