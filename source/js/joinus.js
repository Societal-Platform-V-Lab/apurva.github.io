function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  var dropdownToggle = dropdown.previousElementSibling;

  // Toggle the display of the selected dropdown
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
    dropdownToggle.classList.add("active");
    dropdownToggle.querySelector(".dropdown-icon").classList.add("rotated");

    // Add a click event listener to the document to close the dropdown when clicking outside of it
    document.addEventListener("click", closeDropdown);
  } else {
    dropdown.style.display = "none";
    dropdownToggle.classList.remove("active");
    dropdownToggle.querySelector(".dropdown-icon").classList.remove("rotated");

    // Remove the click event listener when closing the dropdown
    document.removeEventListener("click", closeDropdown);
  }

  // Function to close the dropdown when clicking outside of it
  function closeDropdown(event) {
    if (
      !dropdown.contains(event.target) &&
      !dropdownToggle.contains(event.target)
    ) {
      dropdown.style.display = "none";
      dropdownToggle.classList.remove("active");
      dropdownToggle
        .querySelector(".dropdown-icon")
        .classList.remove("rotated");
      document.removeEventListener("click", closeDropdown);
    }
  }
}
