const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbconnection } = require('./database/config');

//crear el Servidor de Express
const app = express();
// Configurar CORS peticiones desde Cualquier Dominio
app.use( cors() );
//base de Datos
dbconnection();


//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Api Res Login by Javi Farina'
    })

});

//escuchar la App en el Puerto
app.listen(process.env.PORT, () => { console.log("Servidor App Login, ok!!:3005") })