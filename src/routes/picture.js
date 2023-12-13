import { Router } from 'express';



import pictureController from '../controllers/PictureController';



const router = new Router(); // instanciou o metodo da classe do app

router.post('/', pictureController.store);

export default router; // exportou a rota para o app.js
