
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // padrão em telas pequenas
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2 },   // tablets
      1024: { slidesPerView: 3 },  // desktops médios
      1280: { slidesPerView: 4 }   // desktops grandes (4 cartões)
    }
});
