const cards = document.querySelectorAll('.reveal');

cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('visible');
  }, 180 * (index + 1));
});
