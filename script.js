// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
          top: targetElement.offsetTop - 50,  // Adjust to offset for fixed navbar
          behavior: 'smooth'
      });
  });
});

// Scroll-triggered Animations (fade-in effect)
const elementsToAnimate = document.querySelectorAll('.scroll-trigger');

function checkScroll() {
  elementsToAnimate.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
          element.classList.add('animate');
      }
  });
}

window.addEventListener('scroll', checkScroll);
checkScroll();  // Run initially to trigger any elements already in view

function revealOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.scroll-trigger');
  const windowHeight = window.innerHeight;
  
  elementsToAnimate.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - 100) { // Adjust to trigger animation just before it's fully in view
          element.classList.add('animate');
      }
  });
}

// Run on scroll and when the page first loads
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();  // Check when the page loads