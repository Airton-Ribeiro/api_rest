import { Router } from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import alunoController from '../controllers/AlunoController';

const router = new Router(); // instanciou o metodo da classe do app

router.get('/', alunoController.index);

export default router; // exportou a rota para o app.js
