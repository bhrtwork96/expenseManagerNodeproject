const {IncomeCats, expeseCats} = require("../models")
const checkIncomeTranscation = async (req, res, next) => {
    const data = req.body;
    if (!(data.day&&data.month&&data.year)) {
        res.status(400).send({ err: "date mandotory" })
        return;
    }
    const d = new Date(`${data.year}-${data.month}-${data.day}`);
    if(!dateIsValid(d)){
        res.status(400).send({ err: "date not valid" })
        return;
    }

    if (!data.amount) {

        res.status(400).send({ err: "Amount Mandotory" })
        return
        
    }

    if (!data.IncomeCatId) {

        res.status(400).send({ err: "Category Id Mandotory" })
        return;
        
    }
    else{
        try{
            const cat = await IncomeCats.findByPk(data.IncomeCatId)
            if(cat){
                next()
            }
            else{
                res.status(400).send({ err: "Category not exist" })
                return;
            }
        }
        catch(err){
            res.status(500).send({err:err})
        }
    }

}

const checkExpenseTranscation = async (req, res, next) => {
    const data = req.body;
    if (!(data.day&&data.month&&data.year)) {
        res.status(400).send({ err: "date mandotory" })
        return;
    }
    const d = new Date(`${data.year}-${data.month}-${data.day}`);
    if(!dateIsValid(d)){
        res.status(400).send({ err: "date not valid" })
        return;
    }

    if (!data.amount) {

        res.status(400).send({ err: "Amount Mandotory" })
        return
        
    }

    if (!data.ExpenseCatId) {

        res.status(400).send({ err: "Category Id Mandotory" })
        return;
        
    }
    else{
        try{
            const cat = await expeseCats.findByPk(data.ExpenseCatId)
            if(cat){
                next()
            }
            else{
                res.status(400).send({ err: "Category not exist" })
                return;
            }
        }
        catch(err){
            res.status(500).send({err:err})
        }
    }

}



function dateIsValid(date) {
    return date instanceof Date && !isNaN(date);
  }

module.exports = {checkIncomeTranscation, checkExpenseTranscation}