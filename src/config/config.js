import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construir la ruta del archivo de base de datos
const databasePath = path.join(__dirname, 'baseDatos.db');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: databasePath // Usar la ruta construida
});

export default sequelize;