document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');
    
    status.textContent = 'Sending...';
    
    // Simulate form submission (you would handle this with backend in a real-world scenario)
    setTimeout(() => {
        status.textContent = 'Message Sent Successfully!';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }, 1000);
});
