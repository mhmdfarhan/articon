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

// marquee
const track = document.getElementById("track");

function startMarquee() {
  gsap.killTweensOf(track);

  const totalWidth = track.scrollWidth;
  const speed = 80;

  gsap.set(track, { x: 0 });

  gsap.to(track, {
    x: -totalWidth / 3, // satu loop panjang
    duration: totalWidth / (speed * 3),
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => {
        x = parseFloat(x);
        if (x <= -totalWidth / 3) {
          return 0; // loop ke posisi awal tanpa blink
        }
        return x;
      })
    }
  });
}

startMarquee();
window.addEventListener("resize", startMarquee);


// marquee2
const track2 = document.getElementById("track2");

function startMarquee2() {
  gsap.killTweensOf(track2);

  // Dapatkan lebar total yang perlu digeser agar terlihat mulus
  // Jika konten sudah diduplikasi di HTML/CSS, cukup gunakan totalWidth/2 atau totalWidth
  const totalWidth = track2.scrollWidth;
  const speed = 80;

  // 1. Tetapkan posisi Awal (Posisi Kiri)
  // Atur posisi awal ke kiri (misalnya, -totalWidth/3) sehingga saat mulai bergerak ke kanan (x: 0),
  // elemen sudah berada di luar layar sebelah kiri dan masuk ke layar.
  gsap.set(track2, { x: -totalWidth / 3 }); 

  // 2. Animasikan ke Kanan (x: 0)
  gsap.to(track2, {
    x: 0, // Target: Bergeser ke kanan hingga kembali ke x=0
    duration: totalWidth / (speed * 3), // Pertahankan durasi/kecepatan
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => {
        x = parseFloat(x);
        // Jika x sudah mencapai posisi 0 (target), atur ulang (loop)
        // ke posisi awal yang paling kiri (-totalWidth / 3)
        if (x >= 0) {
          return -totalWidth / 3; // loop ke posisi awal kiri
        }
        return x;
      })
    }
  });
}

startMarquee2();
window.addEventListener("resize", startMarquee2);

// marquee3
const track3 = document.getElementById("track3");

function startMarquee3() {
  gsap.killTweensOf(track3);

  const totalWidth = track3.scrollWidth;
  const speed = 80;

  gsap.set(track3, { x: 0 });

  gsap.to(track3, {
    x: -totalWidth / 3, // satu loop panjang
    duration: totalWidth / (speed * 3),
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => {
        x = parseFloat(x);
        if (x <= -totalWidth / 3) {
          return 0; // loop ke posisi awal tanpa blink
        }
        return x;
      })
    }
  });
}

startMarquee3();
window.addEventListener("resize", startMarquee3);

// marquee4
const track4 = document.getElementById("track4");

function startMarquee4() {
  gsap.killTweensOf(track4);

  // Dapatkan lebar total yang perlu digeser agar terlihat mulus
  // Jika konten sudah diduplikasi di HTML/CSS, cukup gunakan totalWidth/2 atau totalWidth
  const totalWidth = track4.scrollWidth;
  const speed = 80;

  // 1. Tetapkan posisi Awal (Posisi Kiri)
  // Atur posisi awal ke kiri (misalnya, -totalWidth/3) sehingga saat mulai bergerak ke kanan (x: 0),
  // elemen sudah berada di luar layar sebelah kiri dan masuk ke layar.
  gsap.set(track4, { x: -totalWidth / 3 }); 

  // 2. Animasikan ke Kanan (x: 0)
  gsap.to(track4, {
    x: 0, // Target: Bergeser ke kanan hingga kembali ke x=0
    duration: totalWidth / (speed * 3), // Pertahankan durasi/kecepatan
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => {
        x = parseFloat(x);
        // Jika x sudah mencapai posisi 0 (target), atur ulang (loop)
        // ke posisi awal yang paling kiri (-totalWidth / 3)
        if (x >= 0) {
          return -totalWidth / 3; // loop ke posisi awal kiri
        }
        return x;
      })
    }
  });
}

startMarquee4();
window.addEventListener("resize", startMarquee4);