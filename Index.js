import { obtenerProducto, obtenerProductos, eliminarProducto, eliminarProductos, agregarProducto, actualizarProducto } from "./crud.js";
import Servidor from "./app.js";

function Menu() {
    const args = process.argv.slice(2);
    const comando = args[0];
    const id = args[1];

    let Producto = {
        id: id,
        title: args[2].length > 2 ? args[2] : 'Producto de prueba',
        price: args[3] > 0 ? args[3] : 0,
        category: args[4].length > 2 ? args[4] : 'general',
        description: args[5] ? args[5] : 'Descripción del producto',
        image: args[6] ? args[6] : 'https://example.com'
    };

    switch (comando) {
        case 'agregar':
            agregarProducto(Producto);
            break;

        case 'obtener':
            if (id) {
                obtenerProducto(id);
            } else {
                obtenerProductos();
            }
            break;

        case 'actualizar':
            if (id) {
                actualizarProducto(id, Producto);
            } else {
                console.log('Por favor, proporciona un ID para actualizar un producto.');
            }
            break;

        case 'eliminar':
            if (id) {
                eliminarProducto(id);
            } else {
                eliminarProductos();
            }
            break;

        case 'server':
            Servidor();
            break;

        default:
            console.log('Comando no reconocido. Usa create, read, update, delete o server.');
            break;
    }
}

Menu();
