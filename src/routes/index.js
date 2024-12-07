import {Router} from 'express';
//aqui se importa el modelo de la base de datos menor
import contactanos from '../controllers/controllers.js';

const router = Router();

router.get('/',(req,res) => res.render('index'))//separa esto al controlador
router.get('/cont',(req,res) => res.render('cont'))//y esto también
//rutas post
router.post('/contactanos',contactanos);

export default router;