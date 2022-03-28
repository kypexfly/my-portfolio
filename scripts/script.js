// Initialise Carousel
const newsCarousel = new Carousel(document.querySelector("#newsCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.89,
    slidesToSlide: 2,
    fill: false,
});

ScrollReveal().reveal('.card-box', {reset:true});
ScrollReveal().reveal('#newsCarousel', {reset:true});