// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

// Mouse down
slider.addEventListener('mousedown', (e) => {

  isDown = true;

  slider.classList.add('active');

  startX = e.pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;
});

// Mouse leave
slider.addEventListener('mouseleave', () => {

  isDown = false;

  slider.classList.remove('active');
});

// Mouse up
slider.addEventListener('mouseup', () => {

  isDown = false;

  slider.classList.remove('active');
});

// Mouse move
slider.addEventListener('mousemove', (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;

  const walk = (x - startX) * 2;

  slider.scrollLeft = scrollLeft - walk;
});