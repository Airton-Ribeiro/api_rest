"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express); /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _aluno = require('./routes/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _picture = require('./routes/picture'); var _picture2 = _interopRequireDefault(_picture);

class App { // criando uma classe para exportar o necessario para o servidor
  constructor() {
    // construtor onde serão executados todos os metodos quando a classe for instanciada
    this.app = _express2.default.call(void 0, ); // instanciando o express no .app
    this.middlewares(); // metodo middlewares
    this.routes(); // metodo routes
  }

  middlewares() { // middlewar para executar pelo construtor
    this.app.use(_express2.default.urlencoded({ extended: true }));
    /* Este middleware acima é responsável por analisar os dados
     enviados pelo cliente através de formulários HTML */
    this.app.use(_express2.default.json());
    // Este middleware acima é responsável por analisar o corpo de solicitações com formato JSON.
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default); // rota para a pagina home
    this.app.use('/users/', _user2.default);
    this.app.use('/tokens/', _token2.default);
    this.app.use('/alunos/', _aluno2.default);
    this.app.use('/picture/', _picture2.default);
  }
}

exports. default = new App().app; // exportando o this.app (express)
