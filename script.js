document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const preloader = document.querySelector('.preloader');

    // --- Preloader ---
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // --- Mobile Menu Toggle ---
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Active Nav Link Highlighter ---
    const currentPage = window.location.pathname.split("/").pop();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Handle homepage case (index.html or empty path)
        if (currentPage === '' || currentPage === 'index.html') {
            if (linkPage === 'index.html') {
                link.classList.add('active');
            }
        } else {
            // Handle other pages
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        }
    });
});

