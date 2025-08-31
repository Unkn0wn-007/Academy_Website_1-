document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split("/").pop();

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Set active link
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Handle index.html being the root path
        if ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html') {
             link.classList.add('active');
        } else if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});

