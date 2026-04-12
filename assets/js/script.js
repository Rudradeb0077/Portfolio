'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Initial scale factor
var scale = 1;
var animationTimeInSeconds=0.3
var animationTimeInMiliSeconds=animationTimeInSeconds*1000
// Function to open the popup and set media source
function openPopup(mediaSrc, mediaType) {
  if (mediaType === 'video') {
    document.getElementById('popupImage').style.display = 'none';
    document.getElementById('popupVideo').style.display = 'block';
    document.getElementById('popupVideo').src = mediaSrc;
    document.getElementById('popupVideo').play();
  } else {
    var vidElem = document.getElementById('popupVideo');
    if(vidElem) {
      vidElem.style.display = 'none';
      vidElem.pause();
    }
    document.getElementById('popupImage').style.display = 'block';
    document.getElementById('popupImage').src = mediaSrc;
  }
  
  document.getElementById('popupContainer').style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  document.getElementById('popupContainer').style.animation = 'zoomIn '+animationTimeInSeconds+'s ease'; // Add zoomIn animation
  document.getElementById('popupContainer').style.display = 'block';
  document.getElementById('backgroundOverlay').style.display = 'block';
  // Remove animation class after animation completes
  setTimeout(() => {
    document.getElementById('popupContainer').style.animation = 'none';
  }, animationTimeInMiliSeconds);
}

// Function to close the popup
function closePopup() {
  var videoElem = document.getElementById('popupVideo');
  if (videoElem) videoElem.pause();

  document.getElementById('popupContainer').style.animation = 'zoomOut '+animationTimeInSeconds+'s ease'; // Add zoomOut animation
  setTimeout(() => {
    document.getElementById('popupContainer').style.animation = 'none'; // Reset animation
    document.getElementById('popupContainer').style.display = 'none';
    document.getElementById('backgroundOverlay').style.display = 'none';
  }, animationTimeInMiliSeconds); // Set timeout to match animation duration
}

// Attach click event handlers to each project item
var projectItems = document.querySelectorAll('.bento-card-pr');
projectItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var img = this.querySelector('img');
    var video = this.querySelector('video');
    
    if (img) {
      openPopup(img.src, 'img');
    } else if (video) {
      openPopup(video.src, 'video');
    }
  });
});

// Close popup if the background overlay is clicked
const overlayElement = document.getElementById('backgroundOverlay');
if (overlayElement) {
  overlayElement.addEventListener('click', closePopup);
}


// theme toggle variables
const themeBtn = document.querySelector("[data-theme-btn]");

// Function to set the theme
const setTheme = (theme) => {
  if (theme === "light") {
    document.body.classList.add("light-theme");
    themeBtn.classList.add("active");
  } else {
    document.body.classList.remove("light-theme");
    themeBtn.classList.remove("active");
  }
  localStorage.setItem("theme", theme);
};

// Check for saved theme in localStorage or system preference
const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
setTheme(savedTheme);

// Add click event to theme button
themeBtn.addEventListener("click", function () {
  const currentTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";
  setTheme(currentTheme);
});

// preloader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("page-loaded");
});
