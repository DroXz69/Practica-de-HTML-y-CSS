window.addEventListener("load", () => {
    boton = document.getElementById("aceptar");
    boton.addEventListener("click", () => {
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        mensaje = document.getElementById("sms");
        if (email == "admin@admin.com" && password == "12345") {
            mensaje.innerHTML = "Datos Correctos";
            mensaje.style.color = "green";
        }
        else {
            mensaje.innerHTML = "Datos Incorrectos";
            mensaje.style.color = "red";
        }
    });
});