//Activation du Dark Mode//
const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
//Tabs
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contenu = document.querySelectorAll('.contenu');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    contenu.forEach(content => {
        contenu.classList.remove('active');
    });

    const contenuactif = document.getElementById(tabId);
    contenuactif.classList.add('active');
    document.querySelector(`#${tabId}`).classList.add('active');
}
//Fin du Tabs
//Slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;

}

function nextSlide() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;

    if (slideIndex < slides.childElementCount - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }

    showSlides();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = document.querySelector('.slides').childElementCount - 1;
    }
}

