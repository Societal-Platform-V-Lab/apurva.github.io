document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById("typewriter-text");
  const texts = JSON.parse(typingElement.getAttribute("data-texts"));
  const textArray = Array.isArray(texts) ? texts : [texts];
  let currentIndex = 0;

  function typeText(text, callback) {
    let i = 0;
    let htmlContent = "";

    function type() {
      if (i < text.length) {
        if (text.charAt(i) === "<") {
          const tagEndIndex = text.indexOf(">", i);
          htmlContent += text.substring(i, tagEndIndex + 1);
          i = tagEndIndex + 1;
        } else {
          htmlContent += text.charAt(i);
          i++;
        }
        typingElement.innerHTML = htmlContent;
        setTimeout(type, 100);
      } else if (callback) {
        setTimeout(callback, 2000); // Pause after typing before starting the next text
      }
    }

    type();
  }

  function startTypingAnimation() {
    typeText(textArray[currentIndex], function () {
      currentIndex = (currentIndex + 1) % textArray.length;
      startTypingAnimation();
    });
  }

  // Call the function to start the animation
  startTypingAnimation();
});
