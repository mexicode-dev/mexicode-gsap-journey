// gsap.to('h1', { x: 800 });

// // gsap.to('#crocodile', { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 });

// gsap.fromTo(
//   '#crocodile',
//   { x: 700, y: 400 },
//   { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 }
// );

gsap.to('#crocodile', { duration: 2, x: 600, ease: 'back(6)' });
gsap.to('#rabbit', { duration: 2, x: 600, ease: 'linear' });
