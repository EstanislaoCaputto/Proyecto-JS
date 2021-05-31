class item {
    constructor (nombre, id, precio) {
        this.nombre = nombre.toUpperCase();
        this.id = parseInt(id);
        this.precio = parseInt(precio);
        
    }
}

const todosProduc =[];

const producto = new item("Las Hojas", 1, 150);
todosProduc.push(producto);
const producto1 = new item("Van Hasen", 2, 200);
todosProduc.push(producto1);
const producto2 = new item("OCB", 3, 90);
todosProduc.push(producto2);
const producto3 = new item("OCB Cañamo", 4, 80);
todosProduc.push(producto3);

const gasto = +prompt("Cuanto quiere gastar?: ");
const sufi = todosProduc.filter(elm => elm.precio <= gasto);



console.log("Te alcansa para estos productos: ");
console.log(sufi);


let compra =[];

function agregarItem(){
    let eleccion = parseInt(prompt("Cual desea? : 1(Las Hojas) 2(Van Hasen) 3(OCB) 4(OCB Cañamo) 0(Salir)"));
    while (eleccion != 0){
        switch(eleccion){
            case 1:
                compra.push(producto);
                break;
            case 2:
                compra.push(producto1);
                break;
            case 3:
                compra.push(producto2);
                break;
            case 4:
                compra.push(producto3);
                break;
            default:
                alert("Opcion incorrecta elija otra o 0 para terminar compra")
        }
        eleccion = parseInt(prompt("Cual desea? : 1(Las Hojas) 2(Van Hasen) 3(OCB) 4(OCB Cañamo) 0 para salir."));
    }
}
agregarItem();
console.log(compra);



const costo = compra.map(item => item.precio);
var total = costo.reduce((prev, next) => prev + next);
var vuelto = gasto - total;
console.log("El total es de: $" + total + ". Su vuelto es: $" + vuelto);



