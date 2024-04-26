import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.category-card__slider-3', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 23,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.category-card__btn-next-3',
    prevEl: '.category-card__btn-prev-3',
  },
});
