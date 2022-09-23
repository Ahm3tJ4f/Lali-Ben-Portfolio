const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect: "coverflow",
    centeredSlides: true,
    speed: 700,
    direction: 'horizontal',
    loop: true,
    coverflowEffect: {
        rotate: 0,
        depth: 300,
        slideShadows: false,
    },
    spaceBetween: 90,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    }
});