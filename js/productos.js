//Creo los objetos en js
const tabacos = [];
const cedas = [];
const filtros = [];

class item {
    constructor (nombre, id, precio, src) {
        this.nombre = nombre;
        this.id = parseInt(id);
        this.precio = parseInt(precio);
        this.imagen = src
        
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }

}

tabacos.push(new item("Cuatro leguas", 1, 180, src="img/4-leguas.jpg"));
tabacos.push(new item("Arlequin", 2, 230, src="img/arlequin.jpg"));
tabacos.push(new item("Las Hojas", 3, 200, src="img/Las-hoja.jpg"));
tabacos.push(new item("Van Hânsen", 4, 280, src="img/van-hasen.jpg"));

cedas.push(new item("OCB premium", 5, 100, src="img/cedas-ocb.jpg"));
cedas.push(new item("OCB cañamo", 6, 90, src="img/cedas-ocb-cañamo.jpg"));
cedas.push(new item("Raw", 7, 70, src="img/sedas-raw.jpg"));
cedas.push(new item("Stamp", 8, 80, src="img/sedas-stamps-negras.jpg"));

filtros.push(new item("OCB regular", 9, 120, src="img/filtros-ocb-regulares.jpg"));
filtros.push(new item("OCB slim", 10, 110, src="img/filtros-ocb-slim.jpg"));
filtros.push(new item("Stamp gummed", 11, 130, src="img/filtros-stamps-engomados.jpg"));
filtros.push(new item("Stamp slim", 12, 110, src="img/filtros-stamps-slim.jpg"));


//Creo las listas de objetos en el html

for(t of tabacos){
    $("#tabacos").append(`
    <div class= "container">
        <div class="row align-items-center">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${t.imagen}" class="card-img-top" alt="${t.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${t.nombre}</h5>
                    <p class="card-text">${t.precio}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        </div>
    </div>`);
}
for(f of filtros){
    $("#filtros").append(`
    <div class= "container">
        <div class="row align-items-center">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${f.imagen}" class="card-img-top" alt="${f.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${f.nombre}</h5>
                    <p class="card-text">${f.precio}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        </div>
    </div>
    `);
}

for(c of cedas){
    $("#cedas").append(`
    <div class= "container">
        <div class="row align-items-center">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${c.imagen}" class="card-img-top" alt="${c.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${c.nombre}</h5>
                    <p class="card-text">${c.precio}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        </div>
    </div>
    `);
}

//Agrego eventos para añadir al carro