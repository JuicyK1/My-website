document.getElementById('welcome-title').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? 'black' : 'red';
});

var sectionTitles = document.getElementsByClassName('section-title');

for (var i = 0; i < sectionTitles.length; i++) {
    sectionTitles[i].addEventListener('click', function() {
        var content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    alert('Name: ' + name);
    alert('Email: ' + email);
    alert('Message: ' + message);
});