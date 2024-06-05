// Define the JSON data
const jsonData = [
  {
    title: "Queryable Wisdom",
    subtitle:
      "What would you do differently if you had access to trustworthy, traceable responses from the collective wisdom of your network?",
    image: "source/img/Iconography/Queryable Wisdom.png",
    link: "Queryable-Wisdom.html",
  },
  {
    title: "Voice of Communities",
    subtitle:
      "Wouldn’t it be magical if the voices of community become a sense-making infrastructure that guides your mission?",
    image: "source/img/Iconography/Voice of Communities.png",
    link: "Voice-Communities.html",
  },
  {
    title: "Collaborative Conversations",
    subtitle:
      "Can you imagine all your conversations transforming into valuable and actionable insights?",
    image: "source/img/Iconography/Power of Co-Creation.png",
    link: "Collaborative-Conversations.html",
  },
  {
    title: "Knowledge Curation",
    subtitle:
      "What if you could combine diverse knowledge sources to identify intersectional insights?",
    image: "source/img/Iconography/Knowledge Curation.png",
    link: "Knowledge-Curation.html",
  },
  {
    title: "Strategic Assessment",
    subtitle:
      "What if assessments could be done at scale and offer deep insights and comprehensive understanding?",
    image: "source/img/Iconography/360 Degree Impact.png",
    link: "Strategic-Assessment.html",
  },
  {
    title: "Ecosystem Connection",
    subtitle:
      "Can you imagine the possibility of visualising the ecosystem through the lens of problems, solutions, or the communities being served?",
    image: "source/img/Iconography/Discover Connections.png",
    link: "Ecosystem-Connections.html",
  },
];

// Function to generate HTML for each item
function generateHTML(item) {
  return `
      <div class="col-md-12">
        <div class="blog d-lg-none d-sm-block d-md-block border-bottom">
          <h6 class="card-title text-left">
            <span class="queryable-text">${item.title}</span>
            <span class="wisdom-text"></span>
          </h6>
          <div class="blogcontent">
            <div class="row">
              <div class="col-7" id="mobiletext">
                <p class="cardtext">${item.subtitle}</p>
              </div>
              <div class="col-5">
                <img src="${item.image}" class="mobile-card-img"/>
              </div>
            </div>
          </div>
          <a href="${item.link}" target="_blank">
            <button class="mobile-explore-btn">Explore More</button>
          </a>
          <br />
        </div>
      </div>
    `;
}

// Function to render the HTML
function renderHTML() {
  const section = document.getElementById("experiencecriclemobile");
  const row = section.querySelector(".row");

  // Clear existing HTML
  row.innerHTML = "";

  // Generate HTML for each item and append to the row
  jsonData.forEach((item) => {
    const html = generateHTML(item);
    row.insertAdjacentHTML("beforeend", html);
  });
}

// Call the renderHTML function to render the content
renderHTML();
