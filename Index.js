import { obtenerProducto, obtenerProductos, eliminarProducto, eliminarProductos, agregarProducto, actualizarProducto } from "./crud.js";
import Servidor from "./app.js";

function Menu() {
    const args = process.argv.slice(2);
    const comando = args[0];
    const id = args[1];
    const nombre = args[2];

    let Producto = {
        title: nombre,
        price: 200.50,
        description: 'Descripción del producto',
        image: 'https://example.com',
        category: 'general'
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
