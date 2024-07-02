jQuery(window).on("load", function () {
  "use strict";

  /*  ===================================
       Loading Timeout
       ====================================== */
  $("#loader-fade").fadeOut(0); 
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
