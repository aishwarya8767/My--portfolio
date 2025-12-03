document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById('projects-slider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 380, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -380, behavior: 'smooth' });
  });
});
