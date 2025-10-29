// Navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.section-title, .about-text, .stat, .skill-category, .timeline-item, .project-card, .contact-item, .contact-form').forEach(el => {
    observer.observe(el);
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Typing effect
function initTypingEffect() {
    const text = "Akash Qjha";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingElement.innerHTML = text + '<span class="cursor">|</span>';
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        contactForm.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        // Comment out yaa remove kar dein yeh line
        // hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});



// Simple line loading animation
function animateSkillLines() {
    const skillLines = document.querySelectorAll('.skill-line');
    const skillPercents = document.querySelectorAll('.skill-percent');
    
    skillLines.forEach((line, index) => {
        const targetWidth = line.getAttribute('data-width');
        const percentElement = skillPercents[index];
        
        // Reset to 0
        line.style.width = '0';
        percentElement.textContent = '0%';
        
        // Animate after delay
        setTimeout(() => {
            // Animate the line
            line.style.width = targetWidth + '%';
            
            // Animate percentage counter
            animateLinePercentage(percentElement, parseInt(targetWidth), 1500);
        }, index * 200);
    });
}

// Percentage counter for line animation
function animateLinePercentage(element, target, duration) {
    let start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing
        const current = Math.floor(progress * target);
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '%';
        }
    }
    
    requestAnimationFrame(update);
}

// Call this when skills section comes into view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillLines();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}



// Solar System Interactions
function initSolarSystem() {
    const planets = document.querySelectorAll('.planet-logo');
    
    planets.forEach(planet => {
        // Click effect
        planet.addEventListener('click', () => {
            planet.style.animation = 'planetPulse 0.5s ease';
            setTimeout(() => {
                planet.style.animation = '';
            }, 500);
        });
        
        // Random sparkle effect
        setInterval(() => {
            if (Math.random() > 0.8) {
                planet.style.filter = 'brightness(1.3)';
                setTimeout(() => {
                    planet.style.filter = 'brightness(1)';
                }, 800);
            }
        }, 3000);
    });
}

// Add pulse animation to CSS
const solarStyle = document.createElement('style');
solarStyle.textContent = `
    @keyframes planetPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
`;
document.head.appendChild(solarStyle);

// Initialize solar system
document.addEventListener('DOMContentLoaded', initSolarSystem);
