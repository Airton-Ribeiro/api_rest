"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app); /* importando o this.app da classe app instanciada dentro do app.js */

const port = process.env.APP_PORT; // selecionando a porta a ser usada para executar o servidor
_app2.default.listen(port);
