// let parrafo = document.createElement("p");

// parrafo.innerHTML = "Es conocido por su estilo agresivo y valiente, y por su capacidad para adaptarse a las diferentes situaciones que se presentan en una pelea. Fuera del ring, Mauri es un modelo a seguir para muchos jóvenes que sueñan con convertirse en deportistas profesionales, por su dedicación y su compromiso con la excelencia. A través de su experiencia, Mauri ha aprendido la importancia de la disciplina, la perseverancia y el trabajo duro para alcanzar los objetivos y superar los desafíos en la vida."

// let presentacion = document.getElementById("contenedor");
// contenedor.append(parrafo);


let parrafo = document.createElement("p");

let texto = document.createTextNode("Este sitio web no es real y ha sido creado únicamente con fines de estudio y práctica. Todas las informaciones, contenidos y funcionalidades que se encuentran aquí son simulaciones y no representan ninguna entidad real. La finalidad de este sitio es proporcionar una experiencia de aprendizaje virtual, donde los usuarios puedan interactuar con diferentes elementos de un sitio web y así mejorar sus habilidades en diseño web, programación y otros aspectos relacionados");

parrafo.appendChild(texto);

document.body.appendChild(parrafo);


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

    if (cart.length === 0) {
        const emptyCart = document.createElement('li');
        emptyCart.textContent = 'No hay productos en el carrito.';
        cartList.appendChild(emptyCart);
    } else {
        let totalPrice = 0;

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];

            const item = document.createElement('li');
            item.textContent = `${product.name} - Cantidad: ${product.quantity} - Precio: $${product.price}`;

            cartList.appendChild(item);

            totalPrice += product.price * product.quantity;
        }

        total.textContent = `$${totalPrice}`;
    }
}

function addToCart(id, name, price) {
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        if (product.id === id) {
            product.quantity++;
            saveCart();
            renderCart();
            return;
        }
    }

    cart.push({
        id: id,
        name: name,
        price: price,
        quantity: 1
    });

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