validar = () => {
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    document.querySelector('#validation-name').textContent = "";
    document.querySelector('#validation-phone').textContent = "";
    document.querySelector('#validation-email').textContent = "";
    document.querySelector('#validation-message').textContent = "";

    if(name.value == null || name.value == ""){
        document.querySelector('#validation-name').textContent = "Escriba su nombre completo, por favor";
        name.focus();
        return false;
    };

    if (phone.value == null || phone.value == "") {
        document.querySelector('#validation-phone').textContent = "Escriba su numero telefónico, por favor";
        phone.focus();
        return false;
    };

    if (email.value == null || email.value == "") {
        document.querySelector('#validation-email').textContent = "Escriba su correo electrónico, por favor";
        email.focus();
        return false;
    };

    if (message.value == null || message.value == "") {
        document.querySelector('#validation-message').textContent = "Escriba su mensaje, por favor";
        message.focus();
        return false;
    };

    document.querySelector('#success').textContent = "Solicitud enviada";

    document.querySelector('#validation-name').textContent = "";
    document.querySelector('#validation-phone').textContent = "";
    document.querySelector('#validation-email').textContent = "";
    document.querySelector('#validation-message').textContent = "";

}

document.querySelector('#btn-valid').addEventListener('click', (e) => {

    validar();

    e.preventDefault();
});