var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 4,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    425: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  }
});