var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET Página de Usuário Padrão: */
router.get('/', userController.index);

/* GET Página de Usuário Padrão: */
router.get('/login', userController.login);

/* GET Página de Cadastro Usuário: */
router.get('/cadastro', userController.cadastro);

module.exports = router;
