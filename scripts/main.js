//Array de productos

const productos = [
  {
    id: "producto-01",
    titulo: "Medias Azul y blancas",
    imagen: "../img/medias-azubla.jpg",
    precio: 1000
  },

  {
    id: "producto-02",
    titulo: "Medias Homero js",
    imagen: "../img/frase-homero.jpg",
    precio: 1500
  },

  {
    id: "producto-03",
    titulo: "Medias Grises",
    imagen: "../img/medias-gris.jpg",
    precio: 1200
  },

  {
    id: "producto-04",
    titulo: "Medias guitarras",
    imagen: "../img/medias-guitarra.jpg",
    precio: 2000
  },

  {
    id: "producto-05",
    titulo: "Medias Huellas",
    imagen: "../img/medias-huellas.jpg",
    precio: 1300
  },
  
  {
    id: "producto-06",
    titulo: "Medias Pancho",
    imagen: "../img/medias-salchichas.jpg",
    precio: 1600
  }
];

//DOM
const contenedorProductos = document.getElementById("todos-los-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");



function cargarProducto() {

  contenedorProductos.innerHTML = "";

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalle">
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="producto-precio">$${producto.precio}</p>
    <button class="producto-agregar" id= "${producto.id}">AGREGAR AL CARRITO</button>
    </div>
    `;

     contenedorProductos.append(div); 
  })
 
}

cargarProducto();

 botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", agregarAlCarrito);
});

//cargar mas productos al carrito de compras

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-el-carrito"));

if(productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
} else {
  productosEnCarrito = [];
};

//Agregar al carrito

function agregarAlCarrito(e) {

 const idBoton = e.currentTarget.id;
 const productoAgregado = productos.find(productos => productos.id === idBoton);
 
 if(productosEnCarrito.some(productos => productos.id === idBoton)) {
   const index = productosEnCarrito.findIndex(productos => productos.id === idBoton);
   productosEnCarrito[index].cantidad++;
} else {
   productoAgregado.cantidad = 1;
   productosEnCarrito.push(productoAgregado);
 }
 
 window.localStorage.setItem("productos-en-el-carrito", JSON.stringify(productosEnCarrito));
 
 
}

//eliminar carrito









