var  caSlideIndex = 1;
showCASlides(caSlideIndex);

// Next/previous controls
function caPlusSlides(n) {
    showSlides(caSlideIndex += n);
}

// Thumbnail image controls
function caCurrentSlide(n) {
    showSlides(caSlideIndex = n);
}
function showSlides(n) {
    var i;
    var caSlides = document.getElementsByClassName("caPortfolioSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > caSlides.length) {caSlideIndex = 1}
    if (n < 1) {caSlideIndex = caSlides.length}
    for (i = 0; i < caSlides.length; i++) {
        caSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    caSlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}