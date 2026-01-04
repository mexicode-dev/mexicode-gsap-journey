// gsap.to('h1', { x: 800 });

// // gsap.to('#crocodile', { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 });

// gsap.fromTo(
//   '#crocodile',
//   { x: 700, y: 400 },
//   { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 }
// );

gsap.to('#toys img', {
  y: -100,
  stagger: {
    each: 0.2,
    from: 'end',
  },
});
