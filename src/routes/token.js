import { Router } from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import tokenController from '../controllers/TokenController';

const router = new Router(); // instanciou o metodo da classe do app

router.post('/', tokenController.store);

export default router; // exportou a rota para o app.js
