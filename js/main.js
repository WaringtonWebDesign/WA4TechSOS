document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        // Close menu when a link is clicked
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });

    }


    // =========================
    // FADE IN ANIMATIONS
    // =========================

    const fadeElements = document.querySelectorAll(
        ".section-label, .intro-content, .service-card, .pc-feature, .process-step, .why-card, .why-item, .location-content, .map-container, .review-card, .final-cta"
    );

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    fadeElements.forEach(element => {
        element.classList.add("fade-hidden");
        observer.observe(element);
    });

});
