async function obtenerProductos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products',
            {
                method: 'GET'
            }
        );

        const data = await response.json();
        console.log('Productos obtenidos',data);
    }
    catch (error) {
        console.error('Error al obtener todos los productos:', error);
    }
}

async function obtenerProducto(id) {
    try {
        const response = await fetch('https://fakestoreapi.com/products/' + id,
            {
                method: 'GET'
            }
        );

        const data = await response.json();
        console.log('Producto obtenido:',data);
    }
    catch (error) {
        console.error('Error al obtener el producto:', error);
    }
}

async function agregarProducto(producto) {
    try {
        const response = await fetch('https://fakestoreapi.com/products',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            }
        );

        const data = await response.json();
        console.log('Producto agregado:',data);
    }
    catch (error) {
        console.error('Error al agregar el producto:', error);
    }
}

async function actualizarProducto(id, producto) {
    try {
        const response = await fetch('https://fakestoreapi.com/products/' + id,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            }
        );

        const data = await response.json();
        console.log('Producto actualizado:',data);
    }
    catch (error) {
        console.error('Error al actualizar el producto:', error);
    }
}

async function eliminarProducto(id) {
    try {
        const response = await fetch('https://fakestoreapi.com/products/' + id,
            {
                method: 'DELETE'
            }
        );

        const data = await response.json();
        console.log('Producto eliminado:',data);
    }
    catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}

async function eliminarProductos() {
    try {
        const response = await fetch('https://fakestoreapi.com/products',
            {
                method: 'DELETE'
            }
        );

        const data = await response.json();
        console.log('Todos los productos fueron eliminados:',data);
    }
    catch (error) {
        console.error('Error al eliminar todos los productos:', error);
    }
}

export { obtenerProductos, obtenerProducto, agregarProducto, actualizarProducto, eliminarProducto, eliminarProductos };