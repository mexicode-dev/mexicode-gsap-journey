// gsap.to('h1', { x: 800 });

// // gsap.to('#crocodile', { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 });

// gsap.fromTo(
//   '#crocodile',
//   { x: 700, y: 400 },
//   { x: 500, y: 100, scale: 1, rotation: 360, duration: 3 }
// );

const tween = gsap.to('.crocodile', { duration: 3, x: 600, ease: 'linear', paused: true });

document.getElementById('play').onclick = () => tween.play();
document.getElementById('pause').onclick = () => tween.pause();
document.getElementById('reverse').onclick = () => tween.reverse();
document.getElementById('restart').onclick = () => tween.restart();
