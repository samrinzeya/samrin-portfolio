function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.toggle('dropdown-active');
}

function closeDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  if (dropdown.classList.contains('dropdown-active')) {
    dropdown.classList.remove('dropdown-active');
  }
}
function closeDropdown1() {
  const dropdown = document.getElementById('dropdown-menu1');
  if (dropdown.classList.contains('dropdown-active')) {
    dropdown.classList.remove('dropdown-active');
  }
}
function closeDropdown2() {
  const dropdown = document.getElementById('dropdown-menu2');
  if (dropdown.classList.contains('dropdown-active')) {
    dropdown.classList.remove('dropdown-active');
  }
}

// function toggleDropdown() {
//   const dropdown = document.getElementById("dropdown-menu");
//   dropdown.classList.toggle("dropdown-active");
// }

function toggleDropdown1() {
  const dropdown = document.getElementById("dropdown-menu1");
  dropdown.classList.toggle("dropdown-active");
}
function toggleDropdown2() {
  const dropdown = document.getElementById("dropdown-menu2");
  dropdown.classList.toggle("dropdown-active");
}


// function openModal(imgElement) {
//   const modal = document.getElementById("imageModal");
//   const enlargedImage = document.getElementById("enlargedImage");
//   const downloadLink = document.getElementById("downloadLink");

//   // Set the image in the modal
//   enlargedImage.src = imgElement.src;
//   // Set the download link for the image
//   downloadLink.href = imgElement.src;

//   // Show the modal
//   modal.style.display = "flex";
// }

// // Function to close modal
// function closeModal() {
//   const modal = document.getElementById("imageModal");
//   modal.style.display = "none";
// }


function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const enlargedImage = document.getElementById("enlargedImage");

  // Set the image in the modal
  enlargedImage.src = imgElement.src;
  // Set the download link for the image

  // Show the modal
  modal.style.display = "flex";
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}