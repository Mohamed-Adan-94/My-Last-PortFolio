/* ================================================================
   ===== TYPING ANIMATION =====
   ================================================================ */

// List of roles to display in the typing animation
const roles = [
    'Computer Networks & Security Student',
    'Cybersecurity Enthusiast',
    'Web Developer',
    'Multimedia Designer',
    'Student Leader',
    'Committed to Growth, Leadership & Impact'
];

// Get the typing element
const typed = document.getElementById('typingText');

// Variables to control the typing animation
let roleIdx = 0;      // Which role is currently being typed
let charIdx = 0;      // Current character position within the role
let deleting = false; // Whether we're deleting or typing

// Main typing function
function type() {
    const current = roles[roleIdx];

    // If not deleting, type characters forward
    if (!deleting) {
        typed.textContent = current.slice(0, charIdx + 1);
        charIdx++;

        // Once complete, pause then start deleting
        if (charIdx === current.length) {
            setTimeout(() => { deleting = true; }, 2000);
        }
        setTimeout(type, 80);
    } 
    // If deleting, remove characters backward
    else {
        typed.textContent = current.slice(0, charIdx);
        charIdx--;

        // Once fully deleted, move to next role
        if (charIdx === 0) {
            deleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, 40);
        }
    }
}

// Start the typing animation
type();


/* ================================================================
   ===== MOBILE HAMBURGER MENU =====
   ================================================================ */

// Get elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});


/* ================================================================
   ===== ACTIVE NAV LINK & BACK TO TOP =====
   ================================================================ */

// Get all sections and navigation items
const sections = document.querySelectorAll('section');
const navItems = navLinks.querySelectorAll('a');

// Listen for scroll events
window.addEventListener('scroll', () => {
    let current = '';

    // Find which section is currently in view
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.id;
        }
    });

    // Update active class on navigation links
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Show/hide back to top button
    const backtop = document.getElementById('backtop');
    if (window.scrollY > 300) {
        backtop.classList.add('visible');
    } else {
        backtop.classList.remove('visible');
    }
});


/* ================================================================
   ===== BACK TO TOP BUTTON =====
   ================================================================ */

document.getElementById('backtop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ================================================================
   ===== SCROLL REVEAL ANIMATIONS =====
   ================================================================ */

// Get all elements with the 'reveal' class
const reveals = document.querySelectorAll('.reveal');

// Intersection Observer to detect when elements enter viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observe each reveal element
reveals.forEach(el => observer.observe(el));


/* ================================================================
   ===== SKILL BARS ANIMATION =====
   ================================================================ */

// Get all skill bar fill elements
const bars = document.querySelectorAll('.skill-bar .fill');

// Intersection Observer for skill bars
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            // Set width to the data-width attribute value
            bar.style.width = bar.dataset.width + '%';
        }
    });
}, { threshold: 0.3 });

// Observe each skill bar
bars.forEach(bar => barObserver.observe(bar));


/* ================================================================
   ===== CONTACT FORM HANDLING =====
   ================================================================ */

// Get the contact form
const contactForm = document.getElementById('contactForm');

// Handle form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Show success message
    alert('Thank you for reaching out! I will get back to you shortly.');

    // Reset the form
    this.reset();
});
