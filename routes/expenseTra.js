const express = require('express');
const {createExpenseTranscation, viewExpenseTranscation, viewOneExpenseTranscation,updateExpenseTranscation, deleteOneExpenseTranscation} = require('../controller/transcation/expense')
const {checkExpenseTranscation}= require("../middlware")

const router = express.Router();


router.post('/expence/api/v1/expensetranscation',[checkExpenseTranscation],createExpenseTranscation);
router.get('/expence/api/v1/expensetranscation',viewExpenseTranscation);
router.get('/expence/api/v1/expensetranscation/:id',viewOneExpenseTranscation);
router.put('/expence/api/v1/expensetranscation/:id',[checkExpenseTranscation],updateExpenseTranscation);
router.delete('/expence/api/v1/expensetranscation/:id',deleteOneExpenseTranscation)




module.exports = router;