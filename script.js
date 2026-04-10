// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Morse code animation
    const morseChars = document.querySelectorAll('.morse-char');
    const morseTranslation = document.querySelector('.morse-translation');
    
    // Morse code for "HELLO"
    const morseSequence = [
        { type: 'dot', duration: 200 },
        { type: 'dot', duration: 200 },
        { type: 'dot', duration: 200 },
        { type: 'dot', duration: 200 },
        { type: 'space', duration: 400 },
        { type: 'dot', duration: 200 },
        { type: 'space', duration: 400 },
        { type: 'dot', duration: 200 },
        { type: 'dash', duration: 600 },
        { type: 'dot', duration: 200 },
        { type: 'dot', duration: 200 },
        { type: 'space', duration: 400 },
        { type: 'dot', duration: 200 },
        { type: 'dash', duration: 600 },
        { type: 'dot', duration: 200 },
        { type: 'dot', duration: 200 },
        { type: 'space', duration: 400 },
        { type: 'dash', duration: 600 },
        { type: 'dash', duration: 600 },
        { type: 'dash', duration: 600 }
    ];

    let currentIndex = 0;
    
    function animateMorse() {
        morseChars.forEach((char, index) => {
            char.style.opacity = '0.3';
        });
        
        if (currentIndex < morseChars.length) {
            morseChars[currentIndex].style.opacity = '1';
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }

    // Start morse animation
    setInterval(animateMorse, 800);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe screenshots
    const screenshots = document.querySelectorAll('.screenshot-item');
    screenshots.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Mobile menu toggle (if needed in future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});