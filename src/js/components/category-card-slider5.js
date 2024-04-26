import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.category-card__slider-5', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 23,
  effect: 'fade',
  speed: 500,
  navigation: {
    nextEl: '.category-card__btn-next-5',
    prevEl: '.category-card__btn-prev-5',
  },
});
