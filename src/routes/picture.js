import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';


import pictureController from '../controllers/PictureController';



const router = new Router(); // instanciou o metodo da classe do app

router.post('/', loginRequired, pictureController.store);

export default router; // exportou a rota para o app.js
