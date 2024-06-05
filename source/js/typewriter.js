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
        // Maintain the color of the text during typing
        typingElement.innerHTML = htmlContent;
        setTimeout(type, 100);
      } else if (callback) {
        setTimeout(callback, 1000); // Pause after typing before deleting
      }
    }

    type();
  }

  function deleteText(callback) {
    let text = typingElement.innerHTML; // Get the HTML content
    let i = text.length;
    let isTag = false;
    let tagBuffer = "";

    function del() {
      if (i > 0) {
        if (text.charAt(i - 1) === ">") {
          isTag = true;
        }
        if (text.charAt(i - 1) === "<") {
          isTag = false;
          tagBuffer = "";
        }
        if (isTag) {
          tagBuffer = text.charAt(i - 1) + tagBuffer;
        }
        if (!isTag && tagBuffer !== "") {
          typingElement.innerHTML = text.substring(0, i - 1) + tagBuffer;
        } else if (!isTag) {
          typingElement.innerHTML = text.substring(0, i - 1);
        }
        i--;
        setTimeout(del, 50);
      } else if (callback) {
        callback();
      }
    }

    del();
  }

  function startTypingAnimation() {
    typeText(textArray[currentIndex], function () {
      deleteText(function () {
        currentIndex = (currentIndex + 1) % textArray.length;
        startTypingAnimation();
      });
    });
  }

  // Call the function to start the animation
  startTypingAnimation();
});