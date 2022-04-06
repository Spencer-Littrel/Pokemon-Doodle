// GSAP included in `index.html`
console.log('I Choose You!');

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
    var images = document.querySelectorAll("img");

    // do something with the images
}


// Pikachu Jumping Animation
gsap.to(".pika", { y: -20, rotate: -5, duration: 0.5, repeat: -1, yoyo: true });

// Slowpoke Breathing Animation
gsap.to(".poke", { scale: 1.1, duration: 1.5, repeat: -1, yoyo: true });

// Exeggutor Grow Animation
// gsap.to(".egg", {scaleY: 2, duration: 3});

// Voltorb Smashes Small e
gsap.fromTo( '.orb', 
            {x: 0, y: -500, opacity: 0},
            {x: 0, y: 130, delay: 1, opacity: 100});

// Small e gets smashed
gsap.fromTo( '#e',
  {opacity: 100},
  {opacity: 0, duration: 1})