console.log(`
=== Guía de uso de la API ===

Autenticación:
email: 'test@gmail.com',
password: '123456'

Login:
    POST /auth/login
    Body: { "email": "string", "password": "string" }

Productos:
    GET    api/products           -> Lista todos los productos
    GET    api/products/:id       -> Obtiene producto por ID
    POST   api/products/update    -> Actualiza un producto (requiere token)
    DELETE api/products/:id       -> Elimina producto (requiere token)
`);
