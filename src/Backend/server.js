require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const itemRoutes = require('./routes/itemsRoutes')
const interestsRoutes = require('./routes/interestsRoutes')
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Middleware para processar dados no formato JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permite solicitações do frontend
    optionsSuccessStatus: 200
}));

// Porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
    res.send('Servidor Funcionando')
})

// Configurar o CORS para a rota de login (antes da rota POST)
app.options('/users/login', cors({
    origin: 'http://localhost:3000', 
    methods: ['POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.options('/items/add', cors({
    origin: 'http://localhost:3000', // Sua origem
    methods: ['POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

app.options('/interests/add', cors({
    origin: 'http://localhost:3000', // Sua origem
    methods: ['POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));


app.use('/items', itemRoutes);
app.use('/interests', interestsRoutes);
app.use('/users', usersRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




