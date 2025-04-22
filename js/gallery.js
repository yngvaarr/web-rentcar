document.addEventListener('DOMContentLoaded', function() {
  const galleryImage = document.getElementById('gallery-image');
  const prevButton = document.querySelector('.gallery-btn.prev');
  const nextButton = document.querySelector('.gallery-btn.next');
  const images = [
    'img/aboutCAR/car1.jpg',
    'img/aboutCAR/car2.jpg',
    'img/aboutCAR/car3.jpg',
    'img/aboutCAR/car4.jpg',
    'img/aboutCAR/car5.jpg',
    'img/aboutCAR/car6.jpg',
    'img/aboutCAR/car7.jpg',
    'img/aboutCAR/car8.jpg',
    'img/aboutCAR/car9.jpg',
    'img/aboutCAR/car10.jpg'
  ]; // Замените на ваши картинки
  let currentIndex = 0;

  function updateImage() {
    galleryImage.style.opacity = 0; // Скрываем картинку
    setTimeout(() => {
      galleryImage.src = images[currentIndex];
      galleryImage.style.opacity = 1; // Показываем картинку
    }, 300); // Задержка должна соответствовать времени transition в CSS
  }

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Инициализация первой картинки
  updateImage();
});