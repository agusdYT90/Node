import express, { json } from 'express';

export default function Servidor() {

    const app = express();
    const PORT = 3000;

    app.use(json());

    app.get('/', (req, res) => {
        res.send('Servidor Node.js con Express funcionando');
    });

    app.use((req, res, next) => {
        console.log(`Datos recibidos:  ${req.method} ${req.url}`);
        next();
    });

    app.get('/json', (req, res) => {
        res.send(
            {
                Productos: [
                    {
                        nombre: "arroz",
                        pricio: 200
                    },
                    {
                        nombre: "queso",
                        precio: 100
                    }
                ]
            }
        );
    });

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}
