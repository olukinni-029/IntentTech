gitdocument.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Send the email
    emailjs.send("service_5mm3dm6", "template_vl2relb", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});
