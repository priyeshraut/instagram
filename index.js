// middle section of like cooment share

// HoverLike and HoverLikeNot

function HoverLike() {
  document.getElementById("img_hover_like").src = "assets/heart lite.svg";
}

function HoverLikeNot() {
  document.getElementById("img_hover_like").src = "assets/heart hard.svg";
}

// HoverComment and HoverCommentNot

function HoverComment() {
  document.getElementById("img_hover_comment").src = "assets/comment lite.svg";
}

function HoverCommentNot() {
  document.getElementById("img_hover_comment").src = "assets/comment hard.svg";
}

// HoverShare and HoverShareNot

function HoverShare() {
  document.getElementById("img_hover_share").src = "assets/sent lite.svg";
}

function HoverShareNot() {
  document.getElementById("img_hover_share").src = "assets/sent hard.svg";
}

// HoverSave and HoverSaveNot

function HoverSave() {
  document.getElementById("img_hover_save").src = "assets/save lite.svg";
}

function HoverSaveNot() {
  document.getElementById("img_hover_save").src = "assets/save hard.svg";
}

// HoverEmoji and HoverEmojiNot

function HoverEmoji() {
  document.getElementById("img_hover_emoji").src = "assets/emoji lite.svg";
}

function HoverEmojiNot() {
  document.getElementById("img_hover_emoji").src = "assets/emoji hard.svg";
}

// HoverDot and HoveDotNot

function HoverDot() {
  document.getElementById("img_hover_dot").src = "assets/dots lite.svg";
}

function HoverDotNot() {
  document.getElementById("img_hover_dot").src = "assets/dots hard.svg";
}

// middle carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// middle profile top display



const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// middle-navbar

function middleShow() {
  document.querySelector('.middle-nav-img-inner').style.display = 'flex';
}
