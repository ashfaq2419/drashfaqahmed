// JavaScript for navigation toggle and dynamic updates
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggleButton.classList.toggle('open');
    });
  }

  // Display current date in the footer
  const lastUpdated = document.getElementById('last-updated');
  if (lastUpdated) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdated.textContent = now.toLocaleDateString('en-US', options);
  }
});