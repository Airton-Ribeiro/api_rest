"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);


var _PictureController = require('../controllers/PictureController'); var _PictureController2 = _interopRequireDefault(_PictureController);



const router = new (0, _express.Router)(); // instanciou o metodo da classe do app

router.post('/', _loginRequired2.default, _PictureController2.default.store);

exports. default = router; // exportou a rota para o app.js
