"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)(); // instanciou o metodo da classe do app

router.get('/', _HomeController2.default.index);

exports. default = router; // exportou a rota para o app.js
