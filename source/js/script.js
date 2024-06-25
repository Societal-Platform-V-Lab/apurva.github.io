jQuery(window).on("load", function () {
  "use strict";

  /*  ===================================
       Loading Timeout
       ====================================== */
  $("#loader-fade").fadeOut(800);
});

$(document).ready(function () {
  function updateHeaderMenuActiveClass() {
    const path = window.location.pathname;
    const mainLink = document.querySelector(".apurva-about");
    const dropdownLink = document.querySelector(".join-us");
    const mainLinkMobile = document.querySelector(".apurva-about-mobile");
    const dropdownLinkMobile = document.querySelector(".join-us-mobile");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Remove all active classes
    $(".nav-item").removeClass("active");
    $(".contact-btn").removeClass("active");
    $(".nav-link").removeClass("active");

    function setupMenu(isJoinUsPage) {
      if (isJoinUsPage) {
        mainLink.textContent = "Join Us";
        mainLink.href = "Join-us.html";
        dropdownLink.textContent = "About";
        dropdownLink.href = "about-us.html";
        mainLinkMobile.textContent = "Join Us";
        mainLinkMobile.href = "Join-us.html";
        dropdownLinkMobile.textContent = "About";
        dropdownLinkMobile.href = "about-us.html";
        mainLink.classList.add("active");
        mainLinkMobile.classList.add("active");
      } else {
        mainLink.textContent = "About";
        mainLink.href = "about-us.html";
        dropdownLink.textContent = "Join Us";
        dropdownLink.href = "Join-us.html";
        mainLinkMobile.textContent = "About";
        mainLinkMobile.href = "about-us.html";
        dropdownLinkMobile.textContent = "Join Us";
        dropdownLinkMobile.href = "Join-us.html";
      }

      // Set up hover functionality for dropdown
      mainLink.addEventListener("mouseover", function () {
        dropdownMenu.style.display = "block";
      });
      dropdownMenu.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
      });
    }

    if (path.includes("/Join-us.html")) {
      setupMenu(true);
    } else if (path.includes("/about-us.html")) {
      setupMenu(false);
      mainLink.classList.add("active");
      mainLinkMobile.classList.add("active");
    } else if (path.includes("/Blog.html")) {
      setupMenu(false);
      $(".apurva-library, .apurva-library-mobile").addClass("active");
    } else if (
      path.includes("/Apurva-Experience.html") ||
      path.includes("/Queryable-Wisdom.html") ||
      path.includes("/Knowledge-Curation.html") ||
      path.includes("/Strategic-Assessment.html") ||
      path.includes("/Ecosystem-Connections.html") ||
      path.includes("/Voice-Communities.html") ||
      path.includes("/Collaborative-Conversations.html")
    ) {
      setupMenu(false);
      $(".apurva-experience, .apurva-experience-mobile").addClass("active");
    } else {
      setupMenu(false);
      $(".nav-link[href='index.html']").addClass("active");
    }
  }

  // Call the function when the page loads
  $(document).ready(function () {
    updateHeaderMenuActiveClass();
  });

  // Also call the function when the window is scrolled
  $(window).on("scroll", function () {
    updateHeaderMenuActiveClass();
    // ... (rest of your scroll event code)
  });

  // Call the function when the page loads
  $(document).ready(function () {
    updateHeaderMenuActiveClass();
  });

  // Also call the function when the window is scrolled
  $(window).on("scroll", function () {
    updateHeaderMenuActiveClass();
    // ... (rest of your scroll event code)
  });

  // Call the function when the page loads
  $(document).ready(function () {
    updateHeaderMenuActiveClass();
  });

  // Also call the function when the window is scrolled
  $(window).on("scroll", function () {
    updateHeaderMenuActiveClass();
    // ... (rest of your scroll event code)
  });

  // Call the function when the page loads
  $(document).ready(function () {
    updateHeaderMenuActiveClass();
  });

  // Also call the function when the window is scrolled
  $(window).on("scroll", function () {
    updateHeaderMenuActiveClass();
    // ... (rest of your scroll event code)
  });

  updateHeaderMenuActiveClass();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 80) {
      $("header").addClass("header-appear");
    } else {
      $("header").removeClass("header-appear");
    }

    updateHeaderMenuActiveClass();

    if ($("nav.navbar").hasClass("bottom-nav")) {
      let navHeight = $(".bottom-nav").offset().top;
      if ($(window).scrollTop() > navHeight) {
        $("header").addClass("header-appear");
      } else {
        $("header").removeClass("header-appear");
      }
    }
  });

  const sections = document.querySelectorAll(".introTitle");

  function animateSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowBottom = window.innerHeight;
      const windowTop = 0;

      if (sectionTop < windowBottom && sectionBottom > windowTop) {
        section.classList.add("animate-introTitle");
      } else {
        section.classList.remove("animate-introTitle");
      }
    });
  }

  sections.forEach((section) => {
    section.classList.add("animate-introTitle");
  });

  window.addEventListener("scroll", animateSections);
});
jQuery(function ($) {
  "use strict";

  /* ===================================
         Side Menu
         ====================================== */

  if ($(".sidemenu_toggle").length) {
    $(".sidemenu_toggle").on("click", function () {
      $(".pushwrap").toggleClass("active");
      $(".side-menu").addClass("side-menu-active"),
        $("#close_side_menu").fadeIn(700);
    }),
      $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"),
          $(this).fadeOut(200),
          $(".pushwrap").removeClass("active");
      }),
      $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"),
          $("#close_side_menu").fadeOut(200),
          $(".pushwrap").removeClass("active");
      }),
      $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"),
          $("#close_side_menu").fadeOut(200),
          $(".pushwrap").removeClass("active");
      });
  }
});

//   /* ===================================
//              Loading Timeout
//       ====================================== */

$("#conversationBtn").on("click", function () {
  $("#message").attr(
    "placeholder",
    'Describe the problem that "Apurva for Co-creation" would address for your organization.'
  );

  $(".type").attr("value", "Co-creation");
});

$("#communitiesBtn").on("click", function () {
  $("#message").attr(
    "placeholder",
    'Describe the problem that "Apurva for Communities" would address for your organization.'
  );

  $(".type").attr("value", "Communities");
});

$("#queryBtn").on("click", function () {
  $("#message").attr(
    "placeholder",
    'Describe the problem that "Apurva for Discovery" would address for your organization.'
  );

  $(".type").attr("value", "Discovery");
});

function sendEmail() {
  let formData = $("#contact-form-data").serializeArray();
  let post_data, output;
  let proceed = "true";
  $("#contact-form-data .input").each(function () {
    if ($(this).attr("name") === "name") {
      if (!$(this).val()) {
        output =
          '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing name fields.</div>';
        proceed = "false";
      }
    } else if ($(this).attr("type") === "email") {
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test($(this).val())) {
        output =
          '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing email fields.</div>';
        proceed = "false";
      }
    } else if ($(this).attr("type") === "website") {
      let urlRegex =
        /^((https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]{2,3})+)$/;
      if (!urlRegex.test($(this).val())) {
        output =
          '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing website fields.</div>';
        proceed = false;
      }
    } else if ($(this).attr("name") === "message") {
      if (!$(this).val()) {
        output =
          '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing message fields.</div>';
        proceed = "false";
      }
    }
  });

  // Convert the form data to a plain object
  const requestData = {};
  formData.forEach(function (item) {
    requestData[item.name] = item.value;
  });

  if (proceed === "true") {
    output = "<div></div>";
    $("#result").hide().html(output);
    $(".contact_btn").css("cursor", "default");
    $(".submit-button-text").prop("hidden", true);
    $(".submit-button-spinner").prop("hidden", false);
    $(".submit-button-spinner").show();
    let pathArray = window.location.pathname.split("/");
    let secondLevelLocation = pathArray[3];

    if ($("#result").length) {
      // alert("yes");
      $("#result").hide().html(output).slideDown();
      $(".contact_btn i").addClass("d-block");
    } else {
      if (response.type == "error") {
        Swal.fire({
          type: "error",
          icon: "error",
          title: "Oops...",
          html: '<div class="text-danger">' + response.msg + "</div>",
        });
        $(".contact_btn i").addClass("d-block");
      } else {
        Swal.fire({
          type: "success",
          icon: "success",
          title: "Success!",
          html: '<div class="text-success">' + response.msg + "</div>",
        });
        $(".contact_btn i").addClass("d-block");
      }
    }
    //data to be sent to server
    $.ajax({
      // url: "https://apurva-early-access-register-hawt6l52da-el.a.run.app",
      url: "https://apurva-early-access-register-hawt6l52da-el.a.run.app/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(requestData),

      success: function (response) {
        $(".contact_btn").css("cursor", "pointer");
        $(".submit-button-text").prop("hidden", false);
        $(".submit-button-spinner").prop("hidden", true);
        $(".submit-button-spinner").hide();
        if (response.type == "error") {
          output =
            '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' +
            response.msg +
            "</div>";
        } else {
          output =
            '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' +
            response.msg +
            "</div>";
          //reset values in all input fields
          $(".contact-form input").val("");
          $(".contact-form textarea").val("");
        }

        if ($("#result").length) {
          // alert("yes");
          $("#result").hide().html(output).slideDown();
          $(".contact_btn i").removeClass("d-block");
        } else {
          if (response.type == "error") {
            Swal.fire({
              type: "error",
              icon: "error",
              title: "Oops...",
              html: '<div class="text-danger">' + response.msg + "</div>",
            });
            $(".contact_btn i").removeClass("d-block");
          } else {
            Swal.fire({
              type: "success",
              icon: "success",
              title: "Success!",
              html: '<div class="text-success">' + response.msg + "</div>",
            });
            $(".contact_btn i").removeClass("d-block");
          }
        }
      },
      error: function () {
        $(".contact_btn").css("cursor", "pointer");
        // $('.submit-button-text').prop('hidden', false);
        // $('.submit-button-spinner').prop('hidden', true);
        // $('.submit-button-spinner').hide();
        // alert("Failer");
      },
    });
  } else {
    if ($("#result").length) {
      // alert("yes");
      /* output =
              '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>'; */
      $("#result").hide().html(output).slideDown();
      $(".contact_btn i").addClass("d-none");
    } else {
      Swal.fire({
        icon: "error",
        type: "error",
        title: "Oops...",
        html: '<div class="text-danger">Please provide the missing fields.111</div>',
      });
      $(".contact_btn i").addClass("d-none");
    }
  }
}

function subScribe() {
  let formData = $("#subscribe-input").val();
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let output;

  if (!emailPattern.test(formData)) {
    proceed = "false";

    const emptyDiv =
      '<div style="color: red";>Please enter valid email address</div>';
    $("#subscribe-result").html(emptyDiv);
  } else {
    $("#subscribe-result").html("<div></div>");
    $(".subscribe-button").css("cursor", "default");
    // $('.subscribe-button').css('background-color', '#d7ffdd');
    $(".subscribe-button-text").prop("hidden", true);
    $(".subscribe-button-spinner").prop("hidden", false);
    $(".subscribe-button-spinner").show();
    $.ajax({
      url: "https://apurva-updates-subscription-hawt6l52da-el.a.run.app/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ email: formData }),

      success: function (response) {
        $(".subscribe-button").css("cursor", "pointer");
        // $('.subscribe-button').css('background-color', '#9fffac');
        $(".subscribe-button-text").prop("hidden", false);
        $(".subscribe-button-spinner").prop("hidden", true);
        $(".subscribe-button-spinner").hide();
        if (response.type == "error") {
          output =
            '<div class="alert-danger" style="padding:10px 15px; margin-top: 15px">' +
            response.msg +
            "</div>";
        } else {
          output =
            '<div class="alert-success subscribrMsg" style="padding:10px 15px; margin-top: 15px">' +
            response.msg +
            "</div>";
          //reset values in all input fields
          $("#subscribe-input").val("");
        }
        $("#subscribe-result").html(output);
        setTimeout(function () {
          $("#subscribe-result").fadeOut("fast");
        }, 3000);
      },
      error: function () {
        $(".subscribe-button").css("cursor", "pointer");
        // $('.subscribe-button').css('background-color', '#9fffac');
        $(".subscribe-button-text").prop("hidden", false);
        $(".subscribe-button-spinner").prop("hidden", true);
        $(".subscribe-button-spinner").hide();
        // alert("Failer");
      },
    });
  }
}

$(".contact_btn").on("click", () => {
  // API Endpoint
  // https://apurva-early-access-nmn5wq3nzq-em.a.run.app

  sendEmail();
});
$(".subscribe-button").on("click", () => {
  // API Endpoint
  // https://apurva-subscription-nmn5wq3nzq-em.a.run.app
  subScribe();
});

// const carousel = document.querySelector(".carouselfeatured");
// let cardIndex = 0;

// setInterval(() => {
//   cardIndex = (cardIndex + 1) % 5;
//   carousel.style.transform = `translateX(-${cardIndex * 320}px)`; // Adjust the value to match your card width + margin
// }, 2000); // Adjust the duration for auto-sliding
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("conversationBtn");
const btn1 = document.getElementById("queryBtn");
const btn2 = document.getElementById("communitiesBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn1.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  const result = document.querySelector("#result");
  const formInput = $("#contact-form-data .input");

  modal.style.display = "none";
  result.style.display = "none";
  formInput.val("");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const formInput = $("#contact-form-data .input");
  if (event.target == modal) {
    modal.style.display = "none";
    result.style.display = "none";
    formInput.val("");
  }
};
