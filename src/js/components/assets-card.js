document.querySelectorAll(".assets-card__autor").forEach(item => {
  item.addEventListener("click", function() {
    setTimeout(() => {
      let cardContent = this.parentElement.querySelector(".assets-card__content");
      let cardInfo = this.parentElement.querySelector(".assets-card__info");
      let cardPrice = this.parentElement.querySelector(".assets-card__price");
      let cardTooltip = this.parentElement.querySelector(".assets-card__tooltip");

      document.querySelectorAll(".assets-card__content").forEach(el => {
        if (el != cardContent) {
          el.classList.remove("assets-card__content-active");
        };
      });
      document.querySelectorAll(".assets-card__info").forEach(el => {
        if (el != cardInfo) {
          el.classList.remove("assets-card__info-active");
        };
      });
      document.querySelectorAll(".assets-card__price").forEach(el => {
        if (el != cardPrice) {
          el.classList.remove("assets-card__price-active");
        };
      });
      document.querySelectorAll(".assets-card__tooltip").forEach(el => {
        if (el != cardTooltip) {
          el.classList.remove("assets-card__tooltip-active");
        };
      });
      cardContent.classList.toggle("assets-card__content-active");
      cardInfo.classList.toggle("assets-card__info-active");
      cardPrice.classList.toggle("assets-card__price-active");
      cardTooltip.classList.toggle("assets-card__tooltip-active");
    }, 200);
  });
});
