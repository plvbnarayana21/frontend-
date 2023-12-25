// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get the logo link
  var logoLink = document.querySelector('.scroll-to-top');

  // Add click event listener to the logo link
  logoLink.addEventListener('click', function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
