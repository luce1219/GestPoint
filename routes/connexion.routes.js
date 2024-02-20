const express = require('express')
const router = express.Router()

const {getConnexion, postConnexion, putConnexion, deleteConnexion} = require('../controllers/connexionController')

router.get('/connexion', getConnexion);
router.post('/connexion', postConnexion);
router.put('/connexion', putConnexion);
router.delete('/connexion', deleteConnexion);




module.exports = router;