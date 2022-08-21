const express = require('express');
const {createIncomeTranscation, viewIncomeTranscation, viewOneIncomeTranscation, updateIncomeTranscation, deleteOneIncomeTranscation} = require('../controller/transcation/income')
const {checkIncomeTranscation}= require("../middlware")

const router = express.Router();


router.post('/expence/api/v1/incometranction',[checkIncomeTranscation],createIncomeTranscation);
router.get('/expence/api/v1/incometranction',viewIncomeTranscation);
router.get('/expence/api/v1/incometranction/:id',viewOneIncomeTranscation);
router.put('/expence/api/v1/incometranction/:id',[checkIncomeTranscation],updateIncomeTranscation);
router.delete('/expence/api/v1/incometranction/:id',deleteOneIncomeTranscation)




module.exports = router;