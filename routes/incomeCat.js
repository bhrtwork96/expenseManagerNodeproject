const express = require('express');
const {createIncomeCat, viewIncomeCat, viewOneIncomeCat, updateIncomeCat, deleteIncomeCat} = require('../controller/catogories/income')
const {duplicateIncomeCatCheck}= require("../middlware")

const router = express.Router();


router.post('/expence/api/v1/incomecat',[duplicateIncomeCatCheck],createIncomeCat);
router.get('/expence/api/v1/incomecat',viewIncomeCat);
router.get('/expence/api/v1/incomecat/:id',viewOneIncomeCat);
router.put('/expence/api/v1/incomecat/:id',updateIncomeCat);
router.delete('/expence/api/v1/incomecat/:id',deleteIncomeCat)




module.exports = router;