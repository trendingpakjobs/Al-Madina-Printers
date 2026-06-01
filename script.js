// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// Run after page fully loads
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll('.counter');
    const statsSection = document.querySelector('.stats');
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / 100;

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + "+";
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCounter();
        });
    }

    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    startCounter();
                    observer.unobserve(statsSection);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(statsSection);
    }

});

// ===== SERVICES & PRODUCTS POP =====
const cards = document.querySelectorAll('.service-card, .product-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});



// ===== SCROLL ANIMATION =====
const hiddenElements = document.querySelectorAll('.block, .service-card, .product-card, .stat-card');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach(el => {
  el.classList.add('hidden');
  observer2.observe(el);
});



// ===== SCROLL VIDEO AUTOPLAY =====
const video = document.getElementById("portfolioVideo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.5 // 50% visible hone pe play hoga
});

observer.observe(video);

if (entry.isIntersecting) {
  video.play().then(() => {
    video.muted = false;
  }).catch(() => {});
}
