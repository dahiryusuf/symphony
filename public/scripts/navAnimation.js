$(function() {
  $('.burger').click(() => {
    //toggle nav
    $('.nav-links').toggleClass('nav-active');

    // animate links
    document.querySelectorAll('.nav-links li').forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // burger animation
    $('.burger').toggleClass('toggle');
  });
  
});


