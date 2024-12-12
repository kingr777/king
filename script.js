// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Profile Picture Parallax
window.addEventListener('scroll', () => {
    const profilePic = document.querySelector('.profile-pic');
    const scrolled = window.pageYOffset;
    profilePic.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Add smooth reveal animations
const revealElements = document.querySelectorAll('.skill-item, .work-card, .section-title');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => revealObserver.observe(element));

// Add hover effect to work cards
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Animate skill bars when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const progress = progressBar.dataset.progress;
            progressBar.style.setProperty('--progress', progress / 100);
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.skill-item').forEach(item => skillObserver.observe(item));
