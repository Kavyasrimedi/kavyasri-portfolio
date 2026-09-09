document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded');
});
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Accessibility state update
            const isExpanded = navLinks.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
// Formspree AJAX Submission
    const contactForm = document.getElementById('portfolio-contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            formStatus.textContent = "Sending...";
            formStatus.className = "form-status";
            
            const formData = new FormData(contactForm);

            try {
                // REQUIRED: Replace YOUR_FORM_ID with your actual Formspree string
                const response = await fetch('https://formspree.io/f/meaqpwpo', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    formStatus.textContent = "Thank you! Your message has been sent.";
                    formStatus.className = "form-status success";
                    contactForm.reset();
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                    formStatus.className = "form-status error";
                }
            } catch (error) {
                formStatus.textContent = "Oops! There was a network error.";
                formStatus.className = "form-status error";
            }
        });
    }