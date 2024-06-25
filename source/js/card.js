const featurecarousel = document.querySelector('.featurecarousel');
const cards = featurecarousel.querySelectorAll('.featurecards');
let currentCardIndex = 0;
let cardWidth;

// Variables to store touch positions
let startX, endX;

// Set the width of the cards based on the viewport width
function setCardWidth() {
  if (window.innerWidth <= 760) {
    cardWidth = window.innerWidth;
    cardWidth = cardWidth + 30;
  } else if (window.innerWidth <= 900) {
    cardWidth = window.innerWidth / 2;
    cardWidth = cardWidth + 100;
  } else if (window.innerWidth <= 1024) {
    cardWidth = window.innerWidth / 2;
    cardWidth = cardWidth + 42;
  } else if (window.innerWidth <= 1500) {
    cardWidth = window.innerWidth / 2;
    cardWidth = cardWidth - 180;
  } else if (window.innerWidth <= 1779) {
    cardWidth = window.innerWidth / 2;
    cardWidth = cardWidth - 270;
  } else if (window.innerWidth <= 2200) {
    cardWidth = window.innerWidth / 3;
  } else {
    cardWidth = window.innerWidth / 3;
    cardWidth = cardWidth - 30;
  }
  cards.forEach(featurecards => {
    featurecards.style.width = `${cardWidth - 174}px`;
  });
}

// Slide to the next featurecards
function slideToNextCard() {
  currentCardIndex++;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  }

  featurecarousel.scrollLeft = cards[currentCardIndex].offsetLeft;
}

// Slide to the previous featurecards
function slideToPrevCard() {
  currentCardIndex--;
  if (currentCardIndex < 0) {
    currentCardIndex = cards.length - 1;
  }
  featurecarousel.scrollLeft = cards[currentCardIndex].offsetLeft;
}

// Touch event handlers
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  endX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (startX - endX > 50) {
    // Swipe left
    slideToNextCard();
  } else if (endX - startX > 50) {
    // Swipe right
    slideToPrevCard();
  }
}

// Add touch event listeners
featurecarousel.addEventListener('touchstart', handleTouchStart);
featurecarousel.addEventListener('touchmove', handleTouchMove);
featurecarousel.addEventListener('touchend', handleTouchEnd);

const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
prevArrow.addEventListener('click', slideToPrevCard);
nextArrow.addEventListener('click', slideToNextCard);

// Initialize
setCardWidth();
