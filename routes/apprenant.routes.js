const express = require('express')
const router = express.Router()

const {getApprenant, postApprenant, putApprenant, deleteApprenant} = require('../controllers/apprenantController')

router.get('/apprenant', getApprenant);
router.post('/apprenant', postApprenant);
router.put('/apprenant', putApprenant);
router.delete('/apprenant', deleteApprenant);




module.exports = router;