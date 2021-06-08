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

