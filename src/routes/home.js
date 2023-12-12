import { Router } from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import homeController from '../controllers/HomeController';

const router = new Router(); // instanciou o metodo da classe do app

router.get('/', homeController.index);

export default router; // exportou a rota para o app.js
