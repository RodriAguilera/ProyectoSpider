let parrafo = document.createElement("p");

parrafo.innerHTML = "Es conocido por su estilo agresivo y valiente, y por su capacidad para adaptarse a las diferentes situaciones que se presentan en una pelea. Fuera del ring, Mauri es un modelo a seguir para muchos jóvenes que sueñan con convertirse en deportistas profesionales, por su dedicación y su compromiso con la excelencia. A través de su experiencia, Mauri ha aprendido la importancia de la disciplina, la perseverancia y el trabajo duro para alcanzar los objetivos y superar los desafíos en la vida."

let presentacion = document.getElementById("contenedor");
contenedor.append(parrafo);

// FORMULARIO

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

// CARRITO



var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarProducto(nombre, precio) {
	var producto = carrito.find(p => p.nombre === nombre);
	if (producto) {
		producto.cantidad++;
	} else {
		carrito.push({nombre: nombre, precio: precio, cantidad: 1});
	}
	actualizarCarrito();
	guardarCarrito();
}

function eliminarProducto(nombre) {
	var index = carrito.findIndex(p => p.nombre === nombre);
	if (index !== -1) {
		carrito.splice(index, 1);
	}
	actualizarCarrito();
	guardarCarrito();
}

function vaciarCarrito() {
	carrito = [];
	actualizarCarrito();
	guardarCarrito();
}


function actualizarCarrito() {
	
	var carritoElement = document.getElementById('carrito');

	carritoElement.innerHTML = '';
	
	carrito.forEach(function(producto) {
	
		var li = document.createElement('li');
		li.textContent = producto.nombre + ' x ' + producto.cantidad;
        
        var boton = document.createElement('button');
        
        boton.textContent = 'Eliminar';
        boton.addEventListener('click', function() {
            eliminarProducto(producto.nombre);
        });
        li.appendChild(boton);
        
        carritoElement.appendChild(li);
    });
    
    var totalElement = document.getElementById('total');
    totalElement.textContent = calcularTotal();
}

function calcularTotal() {
var total = 0;
carrito.forEach(function(producto) {
total += producto.precio * producto.cantidad;
});
return total;
}

function guardarCarrito() {
localStorage.setItem('carrito', JSON.stringify(carrito));
}

actualizarCarrito();

