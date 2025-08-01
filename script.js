// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const appointmentForm = document.getElementById('appointmentForm');

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeForm();
    initializeLazyLoading();
    initializeScrollEffects();
    setMinimumDate();
});

// GSAP Animation Initialization
function initializeAnimations() {
    // Hero Section Animations
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero-subtitle', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-buttons .btn', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-stats .stat', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-dental-svg', {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        rotation: -10,
        ease: 'back.out(1.7)'
    }, '-=0.8');

    // Animate hero background elements
    gsap.set('.hero-background circle', { scale: 0, opacity: 0 });
    gsap.to('.hero-background circle', {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5
    });

    // Services Section Animation
    gsap.set('.service-card', { y: 60, opacity: 0 });
    ScrollTrigger.create({
        trigger: '.services-grid',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.service-card', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }
    });

    // About Section Animation
    gsap.set('.about-text', { x: -50, opacity: 0 });
    gsap.set('.doctor-card', { x: 50, opacity: 0 });
    
    ScrollTrigger.create({
        trigger: '.about-content',
        start: 'top 75%',
        onEnter: () => {
            gsap.to('.about-text', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            gsap.to('.doctor-card', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.3
            });
        }
    });

    // Features Animation
    gsap.set('.feature', { y: 30, opacity: 0 });
    ScrollTrigger.create({
        trigger: '.about-features',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.feature', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    });

    // Testimonials Animation
    gsap.set('.testimonial-card', { y: 50, opacity: 0 });
    ScrollTrigger.create({
        trigger: '.testimonials-grid',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.testimonial-card', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    });

    // Appointment Section Animation
    gsap.set('.appointment-info', { x: -40, opacity: 0 });
    gsap.set('.appointment-form-container', { x: 40, opacity: 0 });
    
    ScrollTrigger.create({
        trigger: '.appointment-content',
        start: 'top 75%',
        onEnter: () => {
            gsap.to('.appointment-info', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            gsap.to('.appointment-form-container', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });
        }
    });

    // Contact Section Animation
    gsap.set('.contact-card', { y: 30, opacity: 0 });
    gsap.set('.map-container', { scale: 0.9, opacity: 0 });
    
    ScrollTrigger.create({
        trigger: '.contact-content',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.contact-card', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out'
            });
            gsap.to('.map-container', {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.4
            });
        }
    });

    // Footer Animation
    gsap.set('.footer-section', { y: 40, opacity: 0 });
    ScrollTrigger.create({
        trigger: '.footer-content',
        start: 'top 90%',
        onEnter: () => {
            gsap.to('.footer-section', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Floating animations for hero elements
    gsap.to('.hero-dental-svg', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });

    // Service card hover animations
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.service-icon'), {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.service-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Button hover animations
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // Number counter animation for stats
    document.querySelectorAll('.stat-number').forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 90%',
            onEnter: () => {
                gsap.from({ value: 0 }, {
                    value: numericValue,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function() {
                        const suffix = finalValue.includes('+') ? '+' : 
                                     finalValue.includes('%') ? '%' : '';
                        stat.textContent = Math.round(this.targets()[0].value) + suffix;
                    }
                });
            }
        });
    });
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        if (hamburger.classList.contains('active')) {
            gsap.to('.bar', {
                duration: 0.3,
                ease: 'power2.inOut',
                stagger: 0.1
            });
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            gsap.to(navbar, {
                y: -100,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            gsap.to(navbar, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        
        lastScrollTop = scrollTop;
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form handling
function initializeForm() {
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation
        const inputs = appointmentForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

// Form validation
function validateForm() {
    let isValid = true;
    const requiredFields = appointmentForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.type === 'tel' && !isValidPhone(field.value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        } else if (field.type === 'date' && !isValidDate(field.value)) {
            showFieldError(field, 'Please select a future date');
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        showFieldError(field, 'This field is required');
    } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        showFieldError(field, 'Please enter a valid email address');
    } else if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
        showFieldError(field, 'Please enter a valid phone number');
    } else if (field.type === 'date' && field.value && !isValidDate(field.value)) {
        showFieldError(field, 'Please select a future date');
    }
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#DC3545';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#DC3545';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorElement);
    
    // Animate error message
    gsap.fromTo(errorElement, 
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
}

function clearFieldError(field) {
    field.style.borderColor = '#e1e5e9';
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Validation helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function isValidDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
}

// Set minimum date for appointment booking
function setMinimumDate() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
}

// Form submission
function submitForm() {
    const formData = new FormData(appointmentForm);
    const submitButton = appointmentForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
    submitButton.disabled = true;
    appointmentForm.classList.add('loading');
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        appointmentForm.reset();
        
        // Show success message
        showSuccessMessage('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm your appointment.');
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        appointmentForm.classList.remove('loading');
        
        // Scroll to success message
        gsap.to(window, {
            duration: 0.8,
            scrollTo: {
                y: '.appointment-form-container',
                offsetY: 100
            },
            ease: 'power2.inOut'
        });
        
    }, 2000);
}

function showSuccessMessage(message) {
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    appointmentForm.parentNode.appendChild(successDiv);
    
    // Animate success message
    gsap.fromTo(successDiv,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
    
    // Auto hide after 10 seconds
    setTimeout(() => {
        gsap.to(successDiv, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => successDiv.remove()
        });
    }, 10000);
}

// Lazy loading for images and animations
function initializeLazyLoading() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for lazy loading
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Additional scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero background
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Progress bar (optional)
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
window.addEventListener('resize', debounce(() => {
    ScrollTrigger.refresh();
}, 250));

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
    // You could implement error reporting here
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here if needed
        console.log('Application loaded successfully');
    });
}

// Touch and gesture support for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Focus management for accessibility
document.addEventListener('focusin', (e) => {
    if (e.target.matches('.nav-link, .btn, input, select, textarea')) {
        e.target.style.outline = '2px solid var(--primary-color)';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    e.target.style.outline = '';
    e.target.style.outlineOffset = '';
});

// Initialize tooltips and additional interactive elements
function initializeInteractiveElements() {
    // Add click animations to interactive elements
    document.querySelectorAll('.btn, .service-card, .testimonial-card').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            gsap.to(ripple, {
                scale: 2,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeInteractiveElements);

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics or other tracking implementation would go here
    console.log('Event tracked:', eventName, eventData);
}

// Track form submissions and important interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// Page visibility API for performance optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations or reduce activity when page is not visible
        gsap.globalTimeline.pause();
    } else {
        // Resume animations when page becomes visible
        gsap.globalTimeline.resume();
    }
});

console.log('SmileCare Dental - Application initialized successfully! 🦷✨');
