// Animación de fade-in para las secciones principales
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');

    sections.forEach((section) => {
        section.classList.add('fade-in');
    });
});

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    form.style.display = 'none';
    successMessage.style.display = 'block';
});
