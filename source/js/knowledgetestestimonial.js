const testimonials = [
  {
    imgSrc: "source/img/testimonial/Rachita Misra SELCO.jpg",
    body: `“One stop library and a knowledge centre for the development sector”`,
    name: "Harish Hande",
      title: "Co-founder, SELCO"
  },
  {
    imgSrc: "source/img/testimonial/Maria Clara Pinheiro.jpg",
    body: `“It serves as a vital tool for social entrepreneurs to better understand and articulate the impact of their work within the broader ecosystem. We are also gaining insights into how social innovations worldwide are helping shape a new global framework for longevity.”`,
    name: "Maria Clara Pinheiro",
      title: "Co-Leader, New Longevity Ashoka"
  },
  {
    imgSrc: "source/img/testimonial/Jithin MAD.jpg",
    body: `“My mind is blown! The things that we can now do with this platform in MAD is going to be pathbreaking in our scaling journey. The fact that Apurva.ai can generate insights at such a speed is amazing”`,
    name: "Jithin Nedumala",
      title: "Founder & CEO, Make A Difference"
  },
  {
    imgSrc: "source/img/testimonial/Rocky Sanchez Tirona.jpg",
    body: `"One thing that's very exciting to us is how Apurva will be able to take audio files recorded by WhatsApp or similar platforms in the communities and then take that knowledge and consolidate all that information, even though it's coming at us from many different languages and dialects"`,
    name: "Rocky Sanchez Tirona",
      title: "Managing Director, Fish Forever at Rare"
    }
];
  

const innerContainer = document.getElementById("carousel-inner");

testimonials.forEach((testimonial, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  if (index === 0) carouselItem.classList.add("active");

  carouselItem.innerHTML = `
      <div class="row" >
        <div class="col-md-12 col-lg-12 mb-5 mb-lg-0">
          <div class="knowledge-testimonial pb-5">
            <p class="knowledge-testimonial-body font-italic mb-3">${testimonial.body}</p>
            <div class="dropdown-divider"></div>
            <p class="knowldge-content">
              <span class="knowldge-network-names" style="color: #49785E">${testimonial.name}</span><br />
              <span style="color: black">${testimonial.title}</span>
            </p>
          </div>
        </div>
    `;

  innerContainer.appendChild(carouselItem);
});

const sliderImages = [
  { imgSrc: "source/img/Demo/1.png" },
  { imgSrc: "source/img/Demo/2.png" },
  { imgSrc: "source/img/Demo/3.png" },
  { imgSrc: "source/img/Demo/4.png" },
  { imgSrc: "source/img/Demo/5.png" },
  { imgSrc: "source/img/Demo/6.png" },
  { imgSrc: "source/img/Demo/7.png" },
  { imgSrc: "source/img/Demo/8.png" },
];

const Container = document.getElementById("carousel");

// Create indicators container
const indicatorsContainer = document.createElement("div");
indicatorsContainer.className = "carousel-indicators";

// Create indicators
sliderImages.forEach((_, index) => {
  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.setAttribute("data-bs-target", "#knowledge-carousel");
  indicator.setAttribute("data-bs-slide-to", index.toString());
  if (index === 0) {
    indicator.classList.add("active");
    indicator.setAttribute("aria-current", "true");
  }
  indicator.setAttribute("aria-label", `Slide ${index + 1}`);
  indicatorsContainer.appendChild(indicator);
});

// Add indicators to carousel
Container.appendChild(indicatorsContainer);

// Create carousel items
sliderImages.forEach((testimonial, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  if (index === 0) carouselItem.classList.add("active");

  carouselItem.innerHTML = `
      <div class="image-container-knowledge d-none d-md-block d-lg-block">
        <img src="${testimonial.imgSrc}" alt="Client Image" />
      </div>
      <div class="image-container-knowledge d-sm-block d-md-none">
        <img src="${testimonial.imgSrc}" alt="Client Image" />
      </div>
    `;

  Container.appendChild(carouselItem);
});

// jQuery initialization and button handling
$(document).ready(function () {
  var $carousel = $("#knowledge-carousel");
  var $prevButton = $("#prev-button");
  var $nextButton = $("#next-button");
  var $indicators = $(".carousel-indicators button");

  // Update both buttons and indicators on slide change
  $carousel.on("slid.bs.carousel", function () {
    var $activeItem = $carousel.find(".carousel-item.active");
    var $items = $carousel.find(".carousel-item");
    var currentIndex = $items.index($activeItem);

    // Update button visibility
    if (currentIndex === 0) {
      $prevButton.removeClass("show");
      $nextButton.addClass("show");
    } else if (currentIndex === $items.length - 1) {
      $prevButton.addClass("show");
      $nextButton.removeClass("show");
    } else {
      $prevButton.addClass("show");
      $nextButton.addClass("show");
    }

    // Update indicators
    $indicators.removeClass("active");
    $indicators.eq(currentIndex).addClass("active");
  });

  // Trigger initial visibility check
  $carousel.trigger("slid.bs.carousel");
});
