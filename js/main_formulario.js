function cargarFormulario() {
    
    function camposValidos(nombre1, nombre2, estado) {
        var nombre1 = $("#" + nombre1);
        var nombre2 = $("#" + nombre2);
    
        if (estado == "ok") {
            nombre1.removeClass("is-invalid");
            nombre1.addClass("is-valid");
            nombre2.removeClass("invalid-feedback");
            nombre2.addClass("valid-feedback");
        } else {
            nombre1.removeClass("is-valid");
            nombre1.addClass("is-invalid");
            nombre2.removeClass("valid-feedback");
            nombre2.addClass("invalid-feedback");
        }
    }

    function guardarDatosForm() {
        console.log("Guardo los datos del formulario en la localStorage 'datosFormulario'");
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var telefono = $("#telefono").val();
        var consulta = $("#consulta").val();
        localStorage.setItem("datosFormulario", JSON.stringify({nombre:nombre, email:email, telefono:telefono, mascota:mascota, consulta:consulta}));
    }
    
    function validarFormulario() {
        var nombre = $("#nombre");
        var textoNombre = $("#textoNombre");
    
        if (nombre.val() == "") {
            textoNombre.html("Error! Ingrese un Nombre!");
            camposValidos("nombre", "textoNombre", "error");
            nombre.focus();      
            return false; // Detengo la validación en este lugar
        } else {
            textoNombre.html("Datos validados!");
            camposValidos("nombre", "textoNombre", "ok");
        }
    
        var email = $("#email");
        var textoEmail = $("#textoEmail");
    
        if (email.val() == "") {
            textoEmail.html("Error! Ingrese un Email!");
            camposValidos("email", "textoEmail", "error");
            email.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoEmail.html("Datos validados!");
            camposValidos("email", "textoEmail", "ok");
        }
    
        var telefono = $("#telefono");
        var textoTelefono = $("#textoTelefono");
    
        if (telefono.val() == "") {
            textoTelefono.html("Error! Ingrese un Teléfono!");
            camposValidos("telefono", "textoTelefono", "error");
            telefono.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoTelefono.html("Datos validados!");
            camposValidos("telefono", "textoTelefono", "ok");
        }
    
        var consulta = $("#consulta");
        var textoConsulta = $("#textoConsulta");
    
        if (consulta.val() == "") {
            textoConsulta.html("Error! Ingrese una Consulta!");
            camposValidos("consulta", "textoConsulta", "error");
            consulta.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoConsulta.html("Datos validados!");
            camposValidos("consulta", "textoConsulta", "ok");
        }

        guardarDatosForm();
        $("#formulario_contacto").submit();
        console.log("Formulario Enviado!");
    }

    cargarProvincias(provincias);

    $("#enviar_form").click(function() {
        validarFormulario();
    })

    $("#nombre").focusout(function() {
        validarFormulario();
    })

    $("#email").focusout(function() {
        validarFormulario();
    })

    $("#telefono").focusout(function() {
        validarFormulario();
    })

    $("#provincia").focusout(function() {
        validarFormulario();
    })

    $("#provincia").change(function() {
        validarProvincia();
    })

    $("#ciudad").focusout(function() {
        validarFormulario();
    })

    $("#consulta").focusout(function() {
        validarFormulario();
    })

}

cargarFormulario();