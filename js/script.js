function formSubmit() {
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";
    alert('Thank you for the message. We will get back to you soon.');

    return false;
}