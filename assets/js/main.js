function Bebida(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.seleccionado = false;
}

function Menu(nombre, precio, descripcion, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.foto = foto;
    this.seleccionado = false;
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
var menu3 = new Menu("Insalata Caprese", 8250, "Ensalada para uno con oregano", "https://vaya.in/recipes/wp-content/uploads/2018/04/Zesty-Insalata-Caprese.jpg" )

// Definicion del arreglo vacio para los items del menu
var listadoMenu = []
// Al arreglo vacio incorporamos los 3 objetos para los items del menu
listadoMenu.push(menu1, menu2, menu3)

//Función utilizada para detectar cuando el usuario hace click en el chec de una bebida
function cambioBebida(indice, checkbox){
    var seleccionado = $(checkbox).prop('checked')//consulta si el check que disparo el evento esta seleccionado o no
    listadoBebidas[indice].seleccionado = seleccionado;//cambia en el arreglo de objetos la propiedad seleccionada al item de bebida que corresponde
    calcularCuenta()
}

function cambioMenu(indice, checkbox) {
    var seleccionado = $(checkbox).prop('checked');
    listadoMenu[indice].seleccionado = seleccionado
    calcularCuenta()
}

function calcularCuenta() {
    var total = 0
    var seleccionados = listadoBebidas.filter(bebida => bebida.seleccionado)
    $("#total-cuenta tbody").html("");
    seleccionados.forEach(item => {  //forEach solo se puede aplicar a arreglos
        total = total + item.precio                     
        $("#total-cuenta tbody").append(`
            <tr>
            <td>${item.nombre}</td>
            <td class="text-end fw-bold">$${item.precio.toLocaleString('es-CL')}</td>
            </tr>
        `)
    })       
    
    var seleccionados = listadoMenu.filter(menu => menu.seleccionado)
    seleccionados.forEach(item => {     
        total += item.precio                  //forEach solo se puede aplicar a arreglos
        $("#total-cuenta tbody").append(`
            <tr>
            <td>${item.nombre}</td>
            <td class="text-end fw-bold">$${item.precio.toLocaleString('es-CL')}</td>
            </tr>
        `)
    }) 

    $("#total").html(`$${total.toLocaleString('es-CL')}`)
}


$(document).ready(function(){
    //Ciclo que muestra al usuario los items de bebidas 
    listadoBebidas.forEach((bebida, index) => {
        $("#listado-bebidas").append(`
            <li class="list-group-item d-flex justify-content-between">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="checkBebida${index}" onChange="cambioBebida(${index}, this)">
                        <label class="form-check-label" for="checkBebida${index}">
                         ${bebida.nombre}
                    </label>
                </div>
                <div class="fw-bold">$${bebida.precio.toLocaleString('es-CL')}</div>
            </li>
        `)
    })

     //Ciclo que muestra al usuario los items de Menú
    listadoMenu.forEach((menu, index) => {
        $("#listado-menu").append(`
            <li class="list-group-item">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkMenu${index}" onChange="cambioMenu(${index}, this)">
                    <label class="form-check-label fw-bold" for="checkMenu${index}">
                    ${menu.nombre}
                    </label>
                 </div>
                 <div class="d-flex justify-content-between">
                    <div>${menu.descripcion}</div>
                    <div><img src="${menu.foto}" class="rounded-circle" width="50px"></div>
                 </div>
                 <div class="fw-bold text-end">$${menu.precio.toLocaleString('es-CL')}</div>
              </li>

        `)
    })
});