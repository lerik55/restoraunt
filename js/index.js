const swiper = new Swiper('.about__slider', {
   // Optional parameters
   loop: true,
   slidesPerView: 2,
   spaceBetween: 34,
   // Navigation arrows
   navigation: {
      nextEl: '.about__prev',
      prevEl: '.about__next',
   },

})

const ratingElems = document.querySelectorAll('.dishes__stars')

ratingElems.forEach(item => new Starry(item))




