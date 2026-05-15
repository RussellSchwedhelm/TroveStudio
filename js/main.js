document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            alert('Mobile menu toggle triggered!');
            // In a full build, this would toggle a mobile navigation overlay
        });
    }

    // Interactive hover effects for product cards (optional enhancement)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle pulse or other js-based effect if needed
            // Currently handled smoothly by CSS
        });
    });
});
