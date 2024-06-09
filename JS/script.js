const containers = document.querySelectorAll('.container');
containers.forEach((container, index) => {
  if (index % 2 === 0) {
    container.classList.add('left');
  } else {
    container.classList.add('right');
  }
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var image = document.querySelector('.full-screen-image-container img');
  image.style.filter = 'brightness(' + (100 - scrollPosition / 9) + '%)';
});

window.addEventListener('scroll', function() {
    var scrollPosition = Math.max(window.scrollY - 240, 0);
    var timeline = document.querySelector('.timeline');
    timeline.style.opacity = Math.min(scrollPosition / 500, 1);
});