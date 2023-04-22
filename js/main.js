let infoMauricio = {
  nombre: "Mauricio Tazzioli",
  edad: 27,
  categoria: "Peso mosca",
  record: {
    victorias: 15,
    derrotas: 3,
    empates: 2
  }
};


let ultimosOponentes = ["Jose Nievas", "Marcos Romero", "Bryan Oviedo", "Santiago Lalane"];

ultimosOponentes.push("Mauricio Marsilli");


const agregarParrafo = (texto) => {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    document.body.append(parrafo);
  }

  agregarParrafo("Este sitio web no es real y ha sido creado únicamente con fines de estudio y práctica. Todas las informaciones, contenidos y funcionalidades que se encuentran aquí son simulaciones y no representan ninguna entidad real. La finalidad de este sitio es proporcionar una experiencia de aprendizaje virtual, donde los usuarios puedan interactuar con diferentes elementos de un sitio web y así mejorar sus habilidades en diseño web, programación y otros aspectos relacionados");
  
//FORMULARIO

function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    console.log("Enviando formulario...");
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Email: " + email);
    console.log("Teléfono: " + telefono); 

}

    function limpiarFormulario() {
   
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
 }


 //fetch

const cont = document.getElementById("contenido");
function traer(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results["0"]);
        cont.innerHTML =
        `<img src="${data.results["0"].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre:"${data.results["0"].name.first}" </p>
        `
    })
}


// CARRITO
function aplicarDescuento(precioInicial, porcentajeDescuento) {
    let descuento = precioInicial * (porcentajeDescuento / 100);
    let precioFinal = precioInicial - descuento;
    return precioFinal;
}

function aplicarDescuentoArticulo1() {
    let precioInicial = 10000;
    let porcentajeDescuento = 10;
    let precioFinal = aplicarDescuento(precioInicial, porcentajeDescuento);
    document.getElementById("precio-final-articulo-1").innerHTML = `$${precioFinal}`;
}

function aplicarDescuentoArticulo2() {
    let precioInicial = 12000;
    let porcentajeDescuento = 20;
    let precioFinal = aplicarDescuento(precioInicial, porcentajeDescuento);
    document.getElementById("precio-final-articulo-2").innerHTML = `$${precioFinal}`;
}

document.getElementById("btn-descuento-articulo-1").addEventListener("click", aplicarDescuentoArticulo1);

document.getElementById("btn-descuento-articulo-2").addEventListener("click", aplicarDescuentoArticulo2);



//boton con libreria

let botonComprar = document.getElementById("comprar");
botonComprar.addEventListener("click", () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',
       
      })
})


