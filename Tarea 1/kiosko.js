const prompt = require('prompt-sync')();

let menu = {
    1: { nombre: "Papas fritas", precio: 17 },
    2: { nombre: "Vaso de frutas", precio: 25 },
    3: { nombre: "Jugo de naranja", precio: 30 },
    4: { nombre: "Agua de Jamaica", precio: 15 },
    5: { nombre: "Torta de jamón", precio: 25 }
};

function mostrarMenu() {
    console.log(`
=== Kiosko FESA ===
1) Papas fritas ............... $17
2) Vaso de frutas ............. $25
3) Jugo de naranja ............ $30
4) Agua de Jamaica ............ $15
5) Torta de jamón ............. $25

Escribe "codigo,cantidad" (por ejemplo 3,4). Escribe "fin" para cobrar.
`);
}

function procesarPedido(pedido, carrito, subtotal) {
    let partes = pedido.split(",");
    let codigo = parseInt(partes[0]);
    let cantidad = parseInt(partes[1]);

    if (menu[codigo]) {
        let producto = menu[codigo];
        let totalProd = cantidad * producto.precio;
        carrito.push({ nombre: producto.nombre, cantidad, total: totalProd });
        subtotal += totalProd;
        console.log(`Añadido: ${cantidad} x ${producto.nombre} ($${producto.precio} c/u) = $${totalProd}`);
    } else {
        console.log("Código inválido.");
    }
    return subtotal;
}

function mostrarResumen(carrito, subtotal) {
    let iva = subtotal * 0.16;
    let totalFinal = subtotal + iva;

    console.log("\n-------------------- RESUMEN --------------------");
    carrito.forEach(item => {
        console.log(`${item.nombre.padEnd(15)} x${item.cantidad}  = $${item.total}`);
    });
    console.log("-------------------------------------------------");
    console.log(`Subtotal`.padEnd(20) + " $" + subtotal.toFixed(2));
    console.log(`IVA (16%)`.padEnd(20) + " $" + iva.toFixed(2));
    console.log(`TOTAL`.padEnd(20) + " $" + totalFinal.toFixed(2));
    console.log("-------------------------------------------------");
    console.log("Gracias por su compra.");
}

function iniciarKiosko() {
    let carrito = [];
    let subtotal = 0;
    mostrarMenu();

    while (true) {
        let pedido = prompt("> ");
        if (pedido.toLowerCase() === "fin") break;
        subtotal = procesarPedido(pedido, carrito, subtotal);
    }

    mostrarResumen(carrito, subtotal);
}

iniciarKiosko();
