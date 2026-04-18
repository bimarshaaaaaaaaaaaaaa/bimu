/**
 * Website Tracking Script for Bimarsha Gautam's Portfolio
 */

// 1. Log Page View on Load
window.addEventListener('load', () => {
    const pageTitle = document.title;
    const pageURL = window.location.pathname;
    
    console.log(`%c [TRACKING]: User visited ${pageTitle} (${pageURL})`, 'color: #00D4FF; font-weight: bold;');
});

// 2. Track Navigation Clicks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`%c [TRACKING]: User clicked link to: ${link.getAttribute('href')}`, 'color: #F1E5AC;');
    });
});

// 3. Track Form Submissions (Specifically for contact.html)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // We prevent actual submission for this demo so you can see the log
        // e.preventDefault(); 
        
        const name = contactForm.querySelector('input[type="text"]').value;
        console.log(`%c [SUCCESS]: Form submitted by ${name}`, 'color: #28a745; font-weight: bold;');
    });
}