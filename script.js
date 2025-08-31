document.addEventListener('DOMContentLoaded', function () {
  const navTriggers = document.querySelectorAll('.nav-trigger');
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  function showPage(pageId) {
    // Special handling for homepage
    const mainContentContainer = document.querySelector('main.flex-grow');
    if (pageId === 'home') {
      mainContentContainer.classList.remove('container','mx-auto','p-4','sm:p-6','lg:p-8');
    } else {
      mainContentContainer.classList.add('container','mx-auto','p-4','sm:p-6','lg:p-8');
    }

    // Hide all
    pageSections.forEach((section) => section.classList.remove('active'));

    // Show selected
    const targetSection = document.getElementById(pageId);
    if (targetSection) targetSection.classList.add('active');

    // Update active nav
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${pageId}`) {
        link.classList.add('active');
      }
    });

    // Close mobile menu
    mobileMenu.classList.add('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // Nav clicks
  navTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      const pageId = this.getAttribute('href').substring(1);
      showPage(pageId);
      history.pushState(null, null, `#${pageId}`);
    });
  });

  // Mobile toggle
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Browser back/forward
  window.addEventListener('popstate', function () {
    const pageId = location.hash.substring(1) || 'home';
    showPage(pageId);
  });

  // Initial page load
  const initialPageId = location.hash.substring(1) || 'home';
  showPage(initialPageId);
});
