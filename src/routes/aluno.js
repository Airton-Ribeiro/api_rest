import { Router } from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // instanciou o metodo da classe do app

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);
router.get('/:id', alunoController.show);

export default router; // exportou a rota para o app.js
