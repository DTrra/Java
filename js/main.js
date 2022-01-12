const catalogo = [] //creacion del ArrayProductos

class producto {
    constructor(id, genero, nombre, precio, stock) {
        this.id= id;
        this.genero = genero;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

catalogo.push(new producto(01,"Alimento", "Excellent", 100, 10));
catalogo.push(new producto(02,"Alimento", "Unik", 50, 6));
catalogo.push(new producto(03,"Alimento", "Natural", 30, 6));
catalogo.push(new producto(04,"Alimento", "Excellet2", 30, 8));
catalogo.push(new producto(05,"Alimento", "Unik2", 10, 11));
catalogo.push(new producto(06,"Alimento", "Natural2", 15, 33));

//guardar el array en formato JSON
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};

guardarLocal("listaProductos",JSON.stringify(catalogo));
    

class Menu {
    constructor (menu, imagen, precio) {
        this.menu = menu;
        this.imagen = imagen;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}



//Agregamos un botón con jQuery
$("main").prepend('<div class="container"> <button id="btn1" class="w-100 btn btn-lg btn-outline-primary botonCompra">Listado de productos</button></div> <br>');

//Ajax
$("#btn1").click(() => { 
    $.get("js/datos.json", function (respuesta, estado) {
          if (estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("main").prepend(
            `<div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="p-3 border bg-light">
                        <h3>${dato.nombre}</h3>
                        <p><img src='img/${dato.imagen}' width='240'>
                        <span>${dato.descripcion}</span>
                        <p>${dato.precio}</p>
                    </div>
                </div>    
            </div>`);
            }  
        }
    });
});







