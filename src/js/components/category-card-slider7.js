import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.category-card__slider-7', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 23,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.category-card__btn-next-7',
    prevEl: '.category-card__btn-prev-7',
  },
});
