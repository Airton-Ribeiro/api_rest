import { Router } from 'express'; /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // instanciou o metodo da classe do app

// Não deveria existir!

// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router; // exportou a rota para o app.js
/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH OU PUT
*/
