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
  
  
  $(document).ready(function() {
    var $carousel = $('#knowledge-carousel');
    var $prevButton = $('#prev-button');
    var $nextButton = $('#next-button');
    
    $carousel.on('slid.bs.carousel', function() {
      var $activeItem = $carousel.find('.carousel-item.active');
      var $items = $carousel.find('.carousel-item');
  
      // Check if at the first or last slide
      if ($activeItem.is(':first-child')) {
        $prevButton.removeClass('show'); // Hide "Previous" button
        $nextButton.addClass('show'); // Show "Next" button
      } else if ($activeItem.is(':last-child')) {
        $prevButton.addClass('show'); // Show "Previous" button
        $nextButton.removeClass('show'); // Hide "Next" button
      } else {
        $prevButton.addClass('show'); // Show "Previous" button
        $nextButton.addClass('show'); // Show "Next" button
      }
    });
  
    // Trigger initial visibility check
    $carousel.trigger('slid.bs.carousel');
  });
  