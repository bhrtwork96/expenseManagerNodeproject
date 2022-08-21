const express = require('express');
const {createExpenceCat,viewExpenseCat, viewOneExpenseCat, updateExpenseCat, deleteExpenseCat} = require('../controller/catogories/expence')
const {duplicateExpeseCatCheck}= require("../middlware")

const router = express.Router();


router.post('/expence/api/v1/expencecat',[duplicateExpeseCatCheck],createExpenceCat);
router.get('/expence/api/v1/expencecat',viewExpenseCat);
router.get('/expence/api/v1/expencecat/:id',viewOneExpenseCat);
router.put('/expence/api/v1/expencecat/:id',updateExpenseCat);
router.delete('/expence/api/v1/expencecat/:id',deleteExpenseCat);




module.exports = router;