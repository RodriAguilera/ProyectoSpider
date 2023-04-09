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

// CARRITO


const productList = document.getElementById('product-list');
const product1Btn = productList.querySelector('[data-id="1"]');
const product2Btn = productList.querySelector('[data-id="2"]');

const cartList = document.getElementById('cart-list');
const total = document.getElementById('total-price');

let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart') || '[]');
}

function renderCart() {
    cartList.innerHTML = '';

    if (!cart.length) {
        const emptyCart = document.createElement('li');
        emptyCart.textContent = 'No hay productos en el carrito.';
        cartList.appendChild(emptyCart);
    } else {
        let totalPrice = cart.reduce((acc, product) => {
            const item = document.createElement('li');
            item.textContent = `${product.name} - Cantidad: ${product.quantity} - Precio: $${product.price}`;
            cartList.appendChild(item);
            return acc + (product.price * product.quantity);
        }, 0);

        total.textContent = `$${totalPrice}`;
    }
}

function addToCart(id, name, price) {
    const productIndex = cart.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
}

product1Btn.addEventListener('click', () => {
    addToCart(1, 'Remera', 10000);
});

product2Btn.addEventListener('click', () => {
    addToCart(2, 'Short', 12000);
});

loadCart();
renderCart();

//boton con libreria

let botonComprar = document.getElementById("comprar");
botonComprar.addEventListener("click", () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',
       
      })
})

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