import 'dotenv/config';

import express from 'express';
import open from 'open';
import cors from 'cors';
import bodyParser from 'body-parser';

import productsRouter from './src/routes/products-Routes.js';
import authRouter from './src/routes/auth-Routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found',
        message: 'La ruta solicitada no existe'
    });
});

app.use((err, req, res, next) => {
    const status = err.status || 500;

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Unauthorized', message: 'Token inválido o ausente' });
    }

    res.status(status).json({
        error: status === 500 ? 'Internal Server Error' : 'Error',
        message: err.message || 'Ocurrió un error inesperado'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    open(`http://localhost:${PORT}`);
});
