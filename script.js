let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos el formulario
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evitamos que el formulario se envíe

    // Tomamos los inputs por orden en el HTML
    const inputs = form.querySelectorAll("input");
    const textarea = form.querySelector("textarea");

    const fullName = encodeURIComponent(inputs[0].value); // Full Name
    const email = encodeURIComponent(inputs[1].value); // Email
    const phone = encodeURIComponent(inputs[2].value); // Phone Number
    const subject = encodeURIComponent(inputs[3].value); // Subject
    const message = encodeURIComponent(textarea.value); // Your Message

    // Validación básica
    if (!fullName || !email || !phone || !subject || !message) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }

    // Crear mailto
    const destinatario = "ejemplo@email.com"; // cambia a tu correo
    const body = `Full Name: ${fullName}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;

    window.location.href = `mailto:${"leorp392@yahoo.com"}?subject=${subject}&body=${body}`;
  });
});
