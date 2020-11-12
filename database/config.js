const mongoose = require('mongoose');
require('dotenv').config()
//cadena de Conexion
const dbconnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB en Linea')
    } catch (error) {
        console.log(error)
        throw new Error('Error init DB')
    }



}
module.exports = { dbconnection }