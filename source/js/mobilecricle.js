// Define the JSON data
const jsonData = [
  {
    title: "Queryable Wisdom",
    subtitle:
      "What would you do differently if you could ask questions and get trustworthy and traceable answers from the collective wisdom of your network at your fingertips?",
    image: "source/img/Iconography/Queryable Wisdom.png",
    link: "Queryable-Wisdom.html",
  },
  {
    title: "Voice of Communities",
    subtitle:
      "Wouldn’t it be super helpful if you had a simple way to include the voice of the communities that you work with, in your decision-making and programme design processes?",
    image: "source/img/Iconography/Voice of Communities.png",
    link: "Voice-Communities.html",
  },
  {
    title: "Power of Co-Creation",
    subtitle:
      "How cool would it be if you are able to unlock valuable and actionable insights instantly every time you co-create knowledge with your network through virtual or in-person conversations?",
    image: "source/img/Iconography/Power of Co-Creation.png",
    link: "Power-of.html",
  },
  {
    title: "Knowledge Curation",
    subtitle:
      "Do you want to know how to consolidate and synthesize the knowledge across your organization and network to create an emerging, ever-growing digital brain?",
    image: "source/img/Iconography/Knowledge Curation.png",
    link: "Knowledge-Curation.html",
  },
  {
    title: "Holistic Impact",
    subtitle:
      "Isn’t it more effective when you are able to turn around, listen and sense all across your network of diverse stakeholders, when you are assessing the impact that your work has created?",
    image: "source/img/Iconography/360 Degree Impact.png",
    link: "Holistic-Impact.html",
  },
  {
    title: "Discover Connections",
    subtitle:
      "Is there a way for you to speed up the process of discovering other change leaders across the world, who are working on similar issues, solving with similar approaches, who care about similar communities, funders who fund similar work etc.?",
    image: "source/img/Iconography/Discover Connections.png",
    link: "Discover-Connections.html",
  },
];

// Function to generate HTML for each item
function generateHTML(item) {
  return `
      <div class="col-md-12">
        <div class="blog d-lg-none d-sm-block d-md-block border-bottom">
          <h6 class="card-title text-left">
            <span class="queryable-text">${item.title}</span>
            <span class="wisdom-text">Wisdom</span>
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
  console.log("calling");
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
