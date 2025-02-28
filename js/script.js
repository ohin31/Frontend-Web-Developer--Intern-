 // Mobile menu toggle functionality
 document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const authButtons = document.getElementById('authButtons');
    const dashboardMain = document.querySelector('.dashboard-main');
    const dashboardMobile = document.querySelector('.dashboard-mobile');
    
    // Toggle menu on mobile
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Only toggle auth buttons on small screens
        if (window.innerWidth <= 576) {
            authButtons.classList.toggle('active');
        }
    });
    
    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
        if (window.innerWidth > 576) {
            authButtons.classList.remove('active');
        }
    });
    
    // Add a slight hover effect when mouse moves over the dashboard
    if (window.innerWidth > 768) {
        dashboardMain.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        dashboardMain.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Simple fade-in animation on page load
    setTimeout(function() {
        dashboardMain.style.opacity = '1';
        dashboardMobile.style.opacity = '1';
        dashboardMain.style.transform = 'translateY(0)';
        dashboardMobile.style.transform = 'translateY(0)';
    }, 300);
    
    // Initialize with opacity 0 and transform for animation
    dashboardMain.style.opacity = '0';
    dashboardMobile.style.opacity = '0';
    dashboardMain.style.transform = 'translateY(20px)';
    dashboardMobile.style.transform = 'translateY(20px)';
    dashboardMain.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    dashboardMobile.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

function changeImage(index) {
    const images = ["../daynamic/frame1.jpg","../daynamic/frame2.jpg","../daynamic/frame3.jpg"];
    document.getElementById("featureImage").src = images[index - 1];
}


document.addEventListener('DOMContentLoaded', function() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const loadMoreBtn = document.querySelector('.load-more');
    const testimonialItems = document.querySelectorAll('.testimonial-item');

    // Initially hide all but the first few testimonials
    for (let i = 9; i < testimonialItems.length; i++) {
        testimonialItems[i].style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', function() {
        // Show all testimonials
        testimonialItems.forEach(item => {
            item.style.display = 'block';
        });
        // Hide the button
        loadMoreBtn.style.display = 'none';
    });
});


// faq 

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                arrow.textContent = '▲'; // Change arrow to up
            } else {
                arrow.textContent = '▼'; // Change arrow to down
            }
        });
    });
});