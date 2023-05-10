function Bebida(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Menu(nombre, precio, descripcion, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.foto = foto;
}
// Objetos para crear bebidas
var bebida1 = new Bebida("Martini", 2550)
var bebida2 = new Bebida("Cappuccino", 1370)
var bebida3 = new Bebida("Latte", 1350)
var bebida4 = new Bebida("Mojito", 2290)

// Incorpora los objetos de bebidas en un arreglo
var listadoBebidas = [bebida1, bebida2, bebida3, bebida4]




var menu1 = new Menu("Insalata di Riso", 6750, "Ensalada para dos", "https://www.allrecipes.com/thmb/DnJpkLhBw09h2bQHnj-3_klYQSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3924402-fde39bbdca814afc878c7938d37c7c76.jpg")
var menu2 = new Menu("Insalata all Cipollotti", 5990, "Ensalada para uno", "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-insalata-ceci-patate-cipollotti/_jcr_content/header-par/image_single.img.jpg/1410277015032.jpg")
var menu3 = new Menu("Insalata Caprese", 8250, "Ensalada para uno", "https://vaya.in/recipes/wp-content/uploads/2018/04/Zesty-Insalata-Caprese.jpg" )

// Definicion del arreglo vacio para los items del menu
var listadoMenu = []
// Al arreglo vacio incorporamos los 3 objetos para los items del menu
listadoMenu.push(menu1, menu2, menu3)


$(document).ready(function(){
    //Ciclo que muestra al usuario los items de bebidas 
    listadoBebidas.forEach((bebida, index) => {
        $("#listado-bebidas").append(`
            <li class="list-group-item d-flex justify-content-between">
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" value="" 
                        id="checkBebida${index}" 
                        onChange="cambioBebida(${index}, this)"
                    >
                    <label class="form-check-label" for="checkBebida${index}">
                        ${bebida.nombre}
                    </label>
                </div>
                <div class="fw-bold">$${bebida.precio.toLocaleString('es-CL')}</div>
            </li>
        `)
    })
});