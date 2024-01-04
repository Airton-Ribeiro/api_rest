"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)(); // instanciou o metodo da classe do app

router.post('/', _TokenController2.default.store);

exports. default = router; // exportou a rota para o app.js
