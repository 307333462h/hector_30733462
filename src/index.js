import express from 'express'
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import sequelize from './config/config.js';

import indexRoutes from './routes/index.js';
const port = 3000;
const app= express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(join(__dirname,'public')))

// Middleware para analizar el cuerpo de las solicitudes JSON Spider papu
app.use(express.json());

// Otras configuraciones de middleware, como express.urlencoded si es necesario manao
app.use(express.urlencoded({ extended: true }));

app.set('views',join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)


sequelize.sync({force:false})
.then(()=>{

console.log('Conexion establecida exitosamente con la base de datos SQLITE3');
app.listen(port,()=>{
console.log(`Conexión establecida exitosamente con el servidor en el puerto : ${port}`);
})

}).catch((error)=>{
console.error('Error al crear la base de datos:', error);
})

