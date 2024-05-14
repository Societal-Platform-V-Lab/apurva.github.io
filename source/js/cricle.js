document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards");
  const cardCount = cards.length;
  const circleRadius = 450; // Radius of the circular path
  const angleIncrement = (2 * Math.PI) / cardCount; // Angle between each card
  const initialAngle = Math.PI / 2; // Initial angle for the middle card
  let currentIndex = 0;

  // Set initial positions of cards along the circular path and associate an index with each position
  cards.forEach((card, index) => {
    const angle = index * angleIncrement - initialAngle; // Adjusting initial angle
    const x = Math.cos(angle) * circleRadius;
    const y = Math.sin(angle) * circleRadius;
    card.style.transform = `translate(${x}px, ${y}px)`;
    card.setAttribute("data-index", index); // Associate index with the card
  });

  function showCard(index) {
    cards.forEach((card) => {
      card.classList.remove("active");
      card.classList.remove(`card-1`);
      card.classList.remove(`card-2`);
      card.classList.remove(`card-3`);
      card.classList.remove(`card-4`);
      card.classList.remove(`card-5`);
      card.classList.remove(`card-6`);
      card.querySelector(".explore-btn").classList.remove("active"); // Remove active class from all buttons
      card.style.backgroundColor = ""; // Reset background color
    });
    document.querySelectorAll(".card-desc").forEach((desc) => {
      desc.style.display = "none"; // Hide all descriptions
    });
    cards[index].classList.add("active");
    const card1Positions = [(index + 1) % cardCount];
    const card2Positions = [(index + 2) % cardCount];
    const card3Positions = [(index + 3) % cardCount];
    const card4Positions = [(index + 4) % cardCount];
    const card5Positions = [(index + 5) % cardCount];
    const card6Positions = [(index + 6) % cardCount];
    cards[index].querySelector(".explore-btn").classList.add("active"); 
    cards[index].nextElementSibling.style.display = "block"; // Show description of the active card
    function addClasses(positions, className) {
      positions.forEach((pos) => {
        cards[pos].classList.add(className);
      });
    }

    addClasses(card1Positions, "card-1");
    addClasses(card2Positions, "card-2");
    addClasses(card3Positions, "card-3");
    addClasses(card4Positions, "card-4");
    addClasses(card5Positions, "card-5");
    addClasses(card6Positions, "card-6");
  }

  function slideCards(direction) {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % cardCount;
    } else if (direction === "prev") {
      currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    }
    cards.forEach((card, index) => {
      const angle =
        index * angleIncrement - currentIndex * angleIncrement - initialAngle; // Adjusting initial angle
      const x = Math.cos(angle) * circleRadius;
      const y = Math.sin(angle) * circleRadius;
      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    showCard(currentIndex);
  }

  function autoRotate() {
    slideCards("next");
  }

  // Auto rotate every 1 second
  let rotationInterval = setInterval(autoRotate, 20000);

  // Stop auto rotation on mouse enter
  document
    .querySelector(".container")
    .addEventListener("mouseenter", function () {
      clearInterval(rotationInterval);
    });

  // Resume auto rotation on mouse leave
  document
    .querySelector(".container")
    .addEventListener("mouseleave", function () {
      rotationInterval = setInterval(autoRotate, 20000);
    });

  // Event listener for clicking on cards
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const index = parseInt(card.getAttribute("data-index"));
      currentIndex = index;
      slideCards("next");
    });
  });

  showCard(currentIndex);
});
