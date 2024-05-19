document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada y lista.");
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío real del formulario
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    console.log('Nombre:', name, 'Teléfono:', phone, 'Ciudad:', city, 'Email:', email);
    alert('Gracias por contactarnos, ' + name + '!');
});
