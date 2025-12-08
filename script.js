document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Logo click tooltip
    const logo = document.getElementById('logo-click');
    const logoTooltip = document.getElementById('logo-tooltip');

    logo.addEventListener('click', () => {
        logoTooltip.classList.add('show');
        setTimeout(() => {
            logoTooltip.classList.remove('show');
        }, 2500);
    });

    // Scroll Reveal Animations (Intersection Observer)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Add scroll-reveal to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('scroll-reveal');
        // Reduced stagger delay
        section.style.transitionDelay = `${index * 0.03}s`;
        revealObserver.observe(section);
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
    });

    console.log("Modern Portfolio with animations loaded.");
});
