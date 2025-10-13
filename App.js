import express, { json } from 'express';

function Servidor() {

    const app = express();
    const PORT = 3000;

    app.use(json());

    app.get('/', (req, res) => {
        res.send('¡Servidor Node.js con Express funcionando!');
    });

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}

export default Servidor;
