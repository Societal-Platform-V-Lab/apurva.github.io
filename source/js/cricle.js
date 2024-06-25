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
      card.classList.remove(
        "active",
        "card-1",
        "card-2",
        "card-3",
        "card-4",
        "card-5",
        "card-6"
      );
      card.querySelector(".explorebtn").classList.remove("active"); // Remove active class from all buttons
      card.style.backgroundColor = ""; // Reset background color
    });

    document.querySelectorAll(".card-desc").forEach((desc) => {
      desc.style.display = "none"; // Hide all descriptions
    });

    cards[index].classList.add("active");
    cards[index].querySelector(".explorebtn").classList.add("active");
    cards[index].nextElementSibling.style.display = "block"; // Show description of the active card

    const cardPositions = Array.from(
      { length: cardCount },
      (_, i) => (index + i) % cardCount
    );

    function addClasses(positions, className) {
      positions.forEach((pos) => {
        cards[pos].classList.add(className);
      });
    }

    addClasses([cardPositions[1]], "card-1");
    addClasses([cardPositions[2]], "card-2");
    addClasses([cardPositions[3]], "card-3");
    addClasses([cardPositions[4]], "card-4");
    addClasses([cardPositions[5]], "card-5");
    addClasses([cardPositions[6]], "card-6");
  }

  function slideCards() {
    cards.forEach((card, index) => {
      const angle =
        index * angleIncrement - currentIndex * angleIncrement - initialAngle; // Adjusting initial angle
      const x = Math.cos(angle) * circleRadius;
      const y = Math.sin(angle) * circleRadius;
      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    showCard(currentIndex);
  }

  // Event listener for clicking on cards
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const clickedIndex = parseInt(card.getAttribute("data-index"));
      const difference = (clickedIndex - currentIndex + cardCount) % cardCount;
      if (difference > cardCount / 2) {
        currentIndex =
          (currentIndex - (cardCount - difference) + cardCount) % cardCount;
      } else {
        currentIndex = (currentIndex + difference) % cardCount;
      }
      slideCards();
    });
  });

  // function autoRotate() {
  //   currentIndex = (currentIndex - 1 + cardCount) % cardCount; // Rotate anticlockwise
  //   slideCards();
  // }
  function autoRotate() {
    currentIndex = (currentIndex + 1) % cardCount; // Rotate anticlockwise
    slideCards();
  }
  // Auto rotate every 3 seconds
  let rotationInterval = setInterval(autoRotate, 5000);

  // Stop auto rotation on mouse enter
  document
    .querySelector(".containercricle")
    .addEventListener("mouseenter", function () {
      clearInterval(rotationInterval);
    });

  // Resume auto rotation on mouse leave
  document
    .querySelector(".containercricle")
    .addEventListener("mouseleave", function () {
      rotationInterval = setInterval(autoRotate, 5000);
    });

  showCard(currentIndex);
});
