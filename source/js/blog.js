document.addEventListener("DOMContentLoaded", function () {
  // Data for the blog
  var blogData = [
    {
      imagePath: "./source/img/gif/Bees.gif",
      title: "Bees",
      paragraphs: [
        "When looking for a location for a new hive, potential sites are communicated through dances and a well-coordinated decision is taken. This is done through decentralised knowledge curation and leveraging the shared knowledge for the wellbeing of the hive. This is known as swarm intelligence.",
        "This is put in use for making decisions for the hive’s best survival routes and searching food.",
        "Bees are also known to copy each other through communication and social learning.",
      ],
    },
    {
      imagePath: "./source/img/gif/Elephants.gif",
      title: "Elephants",
      paragraphs: [
        "Led by a matriarch's accumulated knowledge and expertise over time, this is heavily relied on for crucial decision making on when and where to eat, assessing risks from predators and migrating to a new place.",
        "Elephants are known to work together to solve problems like rescuing a calf from a muddy pit or moving heavy objects.",
        "Their collective wisdom is deeply embedded in their social bonds and their matriarchal social dynamics.",
      ],
    },
    {
      imagePath: "./source/img/gif/Ants.gif",
      title: "Ants",
      paragraphs: [
        "Known for intricate nest building through collaborative processes and creating specialised chambers for nurseries, food storage and waste disposal.",
        "They communicate and solve problems with each other using pheromone trails, like when finding the shortest path to a food source.",
        "Ants are known for their strategies to search and navigate disturbed environments, and efficient foraging.",
      ],
    },
    {
      imagePath: "./source/img/gif/Rainforest.gif",
      title: "Rainforest",
      paragraphs: [
        " Encompassing numerous species of plants, animals and fungi, all coexisting in a complex web of relationships.",
        "The high biodiversity of species portrays mutualistic partnerships for pollination and dispersal of seeds, contributing to the overall health of the ecosystem.",
        "Information sharing on potential threats, food sources, and predators are done through release of chemical signals by some plants and vocal and/or behavioural cues from animals and birds.",
      ],
    },
    {
      imagePath: "./source/img/gif/Mycelium.gif",
      title: "Mycelium",
      paragraphs: [
        "Forming vast networks, the fungi communicate with each other and other organisms about nutrients, water and information.",
        "Symbiotic relationships with plants where it aids in extending the plant’s roots and enhances absorption of nutrients from the soil. In return, the fungi are provided with carbohydrates from the plants.",
        " Mycelium’s role of decomposing organic matter and breaking down complex compounds into simpler forms is utilised by other organisms.",
      ],
    },
    {
      imagePath: "./source/img/gif/Coral Reef.gif",
      title: "Coral",
      paragraphs: [
        "Reefs formed from calcium carbonate secretion of individual coral polyps provide habitat for a diverse range of marine organisms like fish, invertebrates and algae.",
        "Corals have a symbiotic relationship with photosynthetic algae to receive essential nutrients through photosynthesis. In return, the algae are provided with shelter and access to sunlight.",
        "Chemical signalling is used to communicate with each other and other organisms. This is used to attract symbiotic algae, initiate reproductive behaviours, recover and adapt to changing conditions.",
        "Coral colonies exhibit a coordinated behaviour for resource allocation and competition for space and resources with neighbouring corals. This leads to distinct growth patterns and colony structures of coral reefs.",
        "They also show a collective response to environmental stressors, like bleaching (expellingof their symbiotic algae) and tissue regeneration after physical damage.",
      ],
    },
    {
      imagePath: "./source/img/gif/Jackdaws.gif",
      title: "Jackdaws",
      paragraphs: [
        " These birds travel in large flocks with distinct rules during their flights, showcasing effective coordination and collective wisdom without centralised leadership.",
      ],
    },
    {
      imagePath: "./source/img/gif/Fish.gif",
      title: "Fish Schools",
      paragraphs: [
        "Bait ball is a quick, coordinated movement used by fish schools to avoid predators by creating stunning visual patterns. ",
      ],
    },
    {
      imagePath: "./source/img/gif/Termites.gif",
      title: "Termites",
      paragraphs: [
        " Known for building intricate mounds with sophisticated ventilation systems that regulate temperature and humidity, termites pass down this architectural knowledge over generations.",
      ],
    },
    {
      imagePath: "./source/img/gif/Dolphin.gif",
      title: "Bottlenose Dolphins",
      paragraphs: [
        "They are known for nightly effective strategy with the ‘bubble-netting’ technique, requiring them to work together and communicate properly to trap their prey.",
      ],
    },
    {
      imagePath: "./source/img/gif/Locusts.gif",
      title: "Marching Locusts",
      paragraphs: [
        "Swarming behaviour exhibited by locusts is a coordinated movement to cover vast distances efficiently to find food sources and migrate.",
      ],
    },
    // Additional blog data entries...
  ];

  // Function to create HTML elements for each blog entry
  function createBlogEntry(blog) {
    var row = document.createElement("div");
    row.classList.add("row");

    var leftCol = document.createElement("div");
    leftCol.classList.add("col-md-6", "col-sm-12");
    var gifImage = document.createElement("div");
    gifImage.classList.add("gifimage");
    var img = document.createElement("img");
    img.src = blog.imagePath;
    img.alt = "Centered Image";
    gifImage.appendChild(img);
    leftCol.appendChild(gifImage);
    row.appendChild(leftCol);

    var rightCol = document.createElement("div");
    rightCol.classList.add("col-md-6", "col-sm-12");
    var gif = document.createElement("div");
    gif.classList.add("gif");
    var title = document.createElement("p");
    title.innerHTML = "<strong>" + blog.title + "</strong>";
    var ul = document.createElement("ul");
    blog.paragraphs.forEach(function (paragraph) {
      var li = document.createElement("li");
      li.textContent = paragraph;
      ul.appendChild(li);
    });
    gif.appendChild(title);
    gif.appendChild(ul);
    rightCol.appendChild(gif);
    row.appendChild(rightCol);

    return row;
  }

  // Function to render all blog entries
  function renderBlogEntries(data) {
    var container = document.getElementById("blogContainer");
    data.forEach(function (blog, index) {
      var entry = createBlogEntry(blog);
      if (index % 2 !== 0) {
        entry.classList.add("row");
      } else {
        entry.classList.add("d-flex", "flex-row-reverse");
      }
      container.appendChild(entry);
    });
  }


  // Render the blog entries when the DOM content is loaded
  renderBlogEntries(blogData);
});
