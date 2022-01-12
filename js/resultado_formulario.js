function cargarDatosForm() {
    console.log("Leo la localStorage 'datosFormulario'");
    return JSON.parse(localStorage.getItem("datosFormulario"));
}

function mostrarDatos() {
    console.log("Muestro los datos de la localStorage 'datosFormulario' y los imprimo en el Div 'resultado_formulario'");
    let datos_formulario = cargarDatosForm();

    let texto = `<p>Nombre: <strong>${datos_formulario.nombre}</strong><br>
                Email: <strong>${datos_formulario.email}</strong><br>
                Teléfono: <strong>${datos_formulario.telefono}</strong><br>
                Dirección: <strong>${datos_formulario.ciudad}</strong><br>
                Consulta: <br><i>${datos_formulario.consulta}</i></p>`;
    $("#resultado_formulario").html(texto);


}

mostrarDatos();