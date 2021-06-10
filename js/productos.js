const tabacos = [];
const cedas = [];
const filtros = [];

class item {
    constructor (nombre, id, precio) {
        this.nombre = nombre.toUpperCase();
        this.id = parseInt(id);
        this.precio = parseInt(precio);
        
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

tabacos.push(new item("Cuatro leguas", 1, 180));
tabacos.push(new item("Arlequin", 2, 230));
tabacos.push(new item("Las Hojas", 3, 200));
tabacos.push(new item("Van Hânsen", 4, 280));

cedas.push(new item("OCB premium", 5, 100));
cedas.push(new item("OCB cañamo", 6, 90));
cedas.push(new item("Raw", 7, 70));
cedas.push(new item("Stamp", 8, 80));

filtros.push(new item("OCB regular", 9, 120));
filtros.push(new item("OCB slim", 10, 110));
filtros.push(new item("Stamp gummed", 11, 130));
filtros.push(new item("Stamp slim", 12, 110));


let mi_tabla = document.createElement("table");
mi_tabla.setAttribute("class", "table table-warning");
let mi_tabla_body = document.createElement("tbody");

for (const producto of tabacos) {
    let mi_fila = document.createElement("tr");
    let mi_celda = document.createElement("td");
    mi_celda.innerText = producto.id;
    mi_fila.appendChild(mi_celda);
    let mi_celda2 = document.createElement("td");
    mi_celda2.innerText = producto.nombre;
    mi_fila.appendChild(mi_celda2);
    let mi_celda3 = document.createElement("td");
    mi_celda3.innerHTML = `<b>$ ${producto.precio}</b>`;
    mi_fila.appendChild(mi_celda3);
    mi_tabla_body.appendChild(mi_fila);
}

mi_tabla.appendChild(mi_tabla_body);
document.getElementById("tabacos").appendChild(mi_tabla);


let mi_tablaCedas = document.createElement("table");
mi_tablaCedas.setAttribute("class", "table table-warning");
let mi_tablaCedas_body = document.createElement("tbody");

for (const producto of cedas) {
    let mi_fila = document.createElement("tr");
    let mi_celda = document.createElement("td");
    mi_celda.innerText = producto.id;
    mi_fila.appendChild(mi_celda);
    let mi_celda2 = document.createElement("td");
    mi_celda2.innerText = producto.nombre;
    mi_fila.appendChild(mi_celda2);
    let mi_celda3 = document.createElement("td");
    mi_celda3.innerHTML = `<b>$ ${producto.precio}</b>`;
    mi_fila.appendChild(mi_celda3);
    mi_tablaCedas_body.appendChild(mi_fila);
}

mi_tablaCedas.appendChild(mi_tablaCedas_body);
document.getElementById("cedas").appendChild(mi_tablaCedas);


let mi_tablaFiltros = document.createElement("table");
mi_tablaFiltros.setAttribute("class", "table table-warning");
let mi_tablaFiltros_body = document.createElement("tbody");

for (const producto of filtros) {
    let mi_fila = document.createElement("tr");
    let mi_celda = document.createElement("td");
    mi_celda.innerText = producto.id;
    mi_fila.appendChild(mi_celda);
    let mi_celda2 = document.createElement("td");
    mi_celda2.innerText = producto.nombre;
    mi_fila.appendChild(mi_celda2);
    let mi_celda3 = document.createElement("td");
    mi_celda3.innerHTML = `<b>$ ${producto.precio}</b>`;
    mi_fila.appendChild(mi_celda3);
    mi_tablaFiltros_body.appendChild(mi_fila);
}

mi_tablaFiltros.appendChild(mi_tablaFiltros_body);
document.getElementById("filtros").appendChild(mi_tablaFiltros)


const listaCarrito = [];

function agregarTabaco(id) {
  const tabacoFind = tabacos.find(producto => producto.id === id);
  console.log(tabacoFind)
  listaCarrito.push(tabacoFind)
}

function agregarCedas(id) {
    const cedasFind = cedas.find(producto => producto.id === id);
    console.log(cedasFind)
    listaCarrito.push(cedasFind)
}

function agregarFiltros(id) {
    const filtrosFind = filtros.find(producto => producto.id === id);
    console.log(filtrosFind)
    listaCarrito.push(filtrosFind)
}







console.log(listaCarrito.length);