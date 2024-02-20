//Importation d'express js
const express = require('express')
const router = express.Router()

const {getAdministrateur, postAdministrateur, putAdministrateur, deleteAdministrateur} = require('../controllers/administrateurController')

router.get('/administrateur', getAdministrateur);
router.post('/administrateur', postAdministrateur);
router.put('/administrateur', putAdministrateur);
router.delete('/administrateur', deleteAdministrateur);



module.exports = router;