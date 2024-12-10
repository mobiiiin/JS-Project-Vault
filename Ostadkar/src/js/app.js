// selected
const buttonHumbuggeryMenu = document.querySelector(".container-button-sidebar");
const sidebar = document.querySelector(".sidebar");
const move = document.querySelector(".move");
const li = document.querySelector(".sidebar ul li");

// this function just for addeventlistener
function eventListener() {
  buttonHumbuggeryMenu.addEventListener("click", buttonSidebar);
}
eventListener()

// this function for open the sidebar 
function buttonSidebar() {
  sidebar.classList.toggle("visible");
  placeMenu()
}

// this function for place humbuggery menu
function placeMenu() {
  if (sidebar.classList.contains("visible")) {
    move.style.transition = " margin 0.4s ease";
    move.style.margin = "0 244px 0 0 "
  }
  else {
    move.style.margin = "0 0 0 0 "
  }
}

// this obj for option slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slideshow: 1,
  loop: Infinity,
  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-next',
    nextEl: '.swiper-button-prev',
  },
});
