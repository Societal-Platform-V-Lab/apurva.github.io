const testimonials = [
    {
      imgSrc: "source/img/testimonial/Rachita Misra SELCO.jpg",
      body: "“Apurva was an active participant in the discussion- ie not just transcribing or summarising the discussion, but also categorising the information as insights, questions which required further probing. It was also interesting to get active prompts during the discussion, in order to build on the conversation. Earlier during our experience with Apurva, she was also able to summarise our work as an organization quite accurately, and specifically point towards certain values of our work which is often not easy to grasp”.",
      name: "Rachita Misra",
      title: "Associate Director- Knowledge and Advocacy, SELCO Foundation"
    },
    {
      imgSrc: "source/img/testimonial/Nitin Pai Takshashila.jpg",
      body: "“Apurva is an exciting tool with potential to significantly boost our research, education, and learning capabilities. For a small organisation with disproportionate knowledge output such as ours, Apurva can help make recording, sharing, recalling and even creating knowledge easy and accessible. We believe that the Queryable Insights feature in Apurva can prove a game-changer as far as knowledge management is concerned”.",
      name: "Nitin Pai",
      title: "Co-founder, The Takshashila Institution"
    },
    {
      imgSrc: "source/img/testimonial/Nirav Kumar Shah PlanetRead.jpg",
      body: "“At BIRD we see in Apurva the possibility of an intelligent third party analysing, collating and contributing on an ongoing basis. We have just started including her in our meetings and are pretty impressed with her already. I am sure we will see her true potential in the coming months”.",
      name: "Nirav Shah",
      title: "COO, BIRD / PlanetRead"
    },
    {
      imgSrc: "source/img/testimonial/Manu-Gupta.jpg",
      body: "“Apurva presents a huge potential for the SEEDS disaster loss platform in terms of expressing sentiments of local populations afflicted by disasters and conveying their wisdom for solutions that are most appropriate for them”.",
      name: "Dr. Manu Gupta",
      title: "Co-founder, SEEDS"
    },
    {
      imgSrc: "source/img/testimonial/Kartik Dhar Project ECHO.jpg",
      body: "“Project ECHO primarily targets problems of dynamic complexity — where knowledge is constantly evolving, for example a pandemic situation like COVID-19. Apurva and ECHO together have the potential to augment static knowledge with dynamic, evolving and contextual best practice knowledge and democratizing it at scale to millions of front line workers around the world. We at ECHO are very excited about the potential of combining the knowledge of the trusted human network of Project ECHO with Apurva acting as an AI amplifier to scale the ECHO movement multi-fold”.",
      name: "Kartik Dhar",
      title: "Chief Technology Officer, Project ECHO"
    },
    {
      imgSrc: "source/img/testimonial/Raghunathan Narayanan Vrutti.jpg",
      body: "“Wow was my reaction when Apruva started putting out the summary, synthesis and visual depiction of the session. Enormous possibilities for its immediate use”.",
      name: "Raghunathan Narayanan",
      title: "Founder and Chief Mentor, Vrutti - Director, CMS"
    },
    {
      imgSrc: "source/img/testimonial/Subho Moulik Samhita.jpg",
      body: "“It was a very interesting experience to see themes played back in real time. The ability to synthesize multiple conversations seamlessly was a great end output / product”.",
      name: "Subho Moulik",
      title: "Advisor, Samhita"
    },
    {
      imgSrc: "source/img/testimonial/C V Madhukar Co Develop.jpg",
      body: "“Apurva helped synthesize knowledge with great speed and relevance and her contribution to live conversations in way of ideas, reflections and suggestions were very valuable. All these insights became a digital brain available for the organization and their networks to leverage. Excited about the innovation potential Apurva holds for the development sector at large”.",
      name: "C V Madhukar",
      title: "CEO, Co-Develop"
    },
    {
      imgSrc: "source/img/testimonial/Santhosh Mathew BMGF.jpg",
      body: "“I am thrilled with the results from using Apurva! They have captured the essence of what we were trying to achieve. I can't wait to use it again and help governments leverage its capabilities”.",
      name: "Dr. Santhosh Mathew",
      title: "Country Lead Public Policy and Finance, Bill & Melinda Gates Foundation"
    },
    {
      imgSrc: "source/img/testimonial/Harish Hande SELCO.jpg",
      body: "“Apurva has been transformational for us in terms of our work. It has leapfrogged us in multiple manners and made us much more efficient than what we were. Apurva is that one stop library or a knowledge centre for the development sector so we stop reinventing, which is one of the most frustrating for me personally from the last 30 years”.",
      name: "Harish Hande",
      title: "Co-founder, SELCO Foundation"
    }
  ];
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const innerContainer = document.getElementById('carousel-inner');
  testimonials.forEach((testimonial, index) => {
    const indicator = document.createElement('li');
    indicator.dataset.target = '#testimonial-carousel';
    indicator.dataset.slideTo = index;
    indicator.classList.add('iconItem', 'rounded-circle');
    if (index === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) carouselItem.classList.add('active');
    carouselItem.innerHTML = `
      <div class="row testimonial">
        <div class="col-md-3 col-lg-2 mb-5 mb-lg-0">
          <div class="rounded-circle testimonial-item">
            <img src="${testimonial.imgSrc}" alt="Client Image" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-9 col-lg-10 mb-5 mb-lg-0">
          <div class="introTitle pb-5">
            <p class="testimonial-body font-italic mb-3">${testimonial.body}</p>
            <div class="dropdown-divider"></div>
            <p class="content pb-5">
              <span class="green-network-names">${testimonial.name}</span><br />
              ${testimonial.title}
            </p>
          </div>
        </div>
      </div>
    `;
    innerContainer.appendChild(carouselItem);
  });