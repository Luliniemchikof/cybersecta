document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la redirección

        const formData = new FormData(formulario);

        fetch("./php/procesar-form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text()) // Recibe la respuesta del PHP
        .then(data => {
            if (data.includes("success")) {
                document.querySelector(".graciasFormulario").style.display = "block";
                document.querySelector(".invalidoFormulario").style.display = "none";
                document.querySelector(".divFormulario").style.display = "none";
            } else {
                document.querySelector(".graciasFormulario").style.display = "none";
                document.querySelector(".invalidoFormulario").style.display = "block";
                document.querySelector(".divFormulario").style.display = "none";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.querySelector(".graciasFormulario").style.display = "none";
            document.querySelector(".invalidoFormulario").style.display = "block";
        });
    });
});
