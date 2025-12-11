// Simple portfolio interactivity
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio page loaded successfully!');

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Optional: Contact form submission handler
function submitContactForm(e) {
  if (e) {
    e.preventDefault();
  }
  alert('Thank you for your message! I will get back to you soon.');
  console.log('Contact form submitted.');
}

// Optional: Highlight active navigation section on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href').substring(1) === current) {
      link.style.color = 'var(--accent)';
      link.style.fontWeight = 'bold';
    }
  });
});
