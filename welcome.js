// Sidebar Toggle Function
function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.style.width = sideMenu.style.width === '250px' ? '0' : '250px';
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// Auto-slide every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);
