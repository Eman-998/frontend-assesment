const createNav=() => {
	let nav = document.querySelector('.navbar');

	nav.innerHTML = `
	<div class="nav">
    <img src="images/logo.png" class="logo" alt="">
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder=" Search what you need" >
        <button class="search-btn"><img src="images/Vector.png" height ="20" width="20" /> </button>
      </div>
      <a href="#"><img src="images/heart.svg" alt=""></a>
      <a href="#"><img src="images/cart.svg" alt=""></a>
      <a href="#"><img src="images/user.svg" alt=""></a>
      <a href="#"><img src="images/bell.svg" alt=""></a>
    </div>
  </div>
  <ul class="links-container"> 
    <li class ="link-item"><button onclick="document.location='shop.html'"><a href="#" class ="link"> Shop </a> </button> </li>
    <li class ="link-item"><button onclick="document.location='work.html'"><a href="#" class ="link"> Promo </a> </li>
    <li class ="link-item"><button onclick="document.location='work.html'"><a href="#" class ="link"> About </a> </li>
    <li class ="link-item"><button onclick="document.location='work.html'"><a href="#" class ="link"> Blog </a> </li>
  </ul>

	`;	
}

createNav();
'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  };
}