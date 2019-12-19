// Solution based on example from Stack Overflow
// When the user scrolls down 130px from the top of the document, show the button

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    document.getElementById("goToTop").style.display = "block";
  } else {
    document.getElementById("goToTop").style.display = "none";
  };
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({scrollTop:0}, "slow");
};

// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navigationList = document.querySelector(".navigation__list");
const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navigationList.classList.toggle("navigation__list--active");
}

hamburger.addEventListener("click", handleClick);
