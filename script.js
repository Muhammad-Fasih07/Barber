// Smooth scrolling for navigation and buttons
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#book').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.hero-btn').addEventListener('click', () => {
    document.querySelector('#book').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.book-now').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#book').scrollIntoView({ behavior: 'smooth' });
    });
});

// Booking Form submission
document.querySelector('.booking form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    e.target.reset();
});

// Contact Form submission (Fix: Check if the element exists first)
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        e.target.reset();
    });
}


// Back to Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// filepath: c:\Users\fasee\OneDrive\Desktop\Barber\script.js
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.getElementById('bookNowButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const datetime = document.getElementById('datetime').value;
    const service = document.getElementById('service').value;

    // Format the date and time
    const formattedDateTime = new Date(datetime).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    // Format message properly
    const message = `Appointment Booking Request – Sangham Beauty Salon\n\nDear Sangham Beauty Salon,\n\nI hope you are doing well. I would like to book an appointment with the following details:\n\n`
        + `Name: ${name}\n`
        + `Phone: ${phone}\n`
        + `Email: ${email}\n`
        + `Preferred Date & Time: ${formattedDateTime}\n`
        + `Service: ${service}\n\nPlease confirm my appointment at your earliest convenience. Looking forward to your response.\n\nBest regards,\n${name}`;

    // Encode the message properly
    const whatsappUrl = `https://wa.me/923465454482?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat
    window.open(whatsappUrl, '_blank');

    // Auto-response message
    alert('Your appointment request has been sent. We will confirm your appointment shortly.');
});

// Booking Date/Time Validation
document.addEventListener('DOMContentLoaded', function () {
    const datetimeInput = document.getElementById('datetime');
    if (!datetimeInput) return;

    function pad(n) { return n < 10 ? '0' + n : n; }

    function setMinDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());
        // Set min time to 10:00
        datetimeInput.min = `${year}-${month}-${day}T10:00`;
    }

    setMinDateTime();

    datetimeInput.addEventListener('input', function () {
        const selected = new Date(this.value);

        // Check if time is between 10am and 9pm
        const hour = selected.getHours();
        if (hour < 10 || hour >= 21) {
            alert('Please select a time between 10:00 AM and 9:00 PM.');
            this.value = '';
            return;
        }
    });
});