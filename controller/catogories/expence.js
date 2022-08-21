const { expeseCats } = require('../../models')
const createExpenceCat = async (req, res) => {
    const data = req.body;
    if (data.name) {
        try {
            const result = await expeseCats.create(data);
            res.send(result)
        }
        catch (err) {

            res.send({ err: err })
        }

    }
    else {
        res.status(400).send({ err: "Category name require" })
    }
}

const viewExpenseCat = async (req, res) => {
    try {
        const cats = await expeseCats.findAll();
        res.send(cats)
    }
    catch (err) {
        res.send({ err: err })
    }
}

const viewOneExpenseCat = async (req, res) => {
    const catId = req.params.id
    try {
        const cats = await expeseCats.findOne({
            where: {
                id: catId
            }
        });
        if (cats) {
            res.send(cats)
        }
        else {
            res.status(400).send({ err: "Id not available" })
        }

    }
    catch (err) {
        res.send({ err: err })
    }
}

const updateExpenseCat = async (req, res) => {
    const data = req.body;
    const catId = req.params.id
    if (data.name) {
        try {
            const cat = await expeseCats.update(data, {
                where: {
                    id: catId
                }
            });
            if (cat) {
                res.send({ msg: "Updated sucessfully" })
            }
            else {
                res.status(400).send({ err: "Category Not Available" })
            }
        }
        catch (err) {

            res.send({ err: err })
        }

    }
    else {
        res.status(400).send({ err: "Category name require" })
    }
}

const deleteExpenseCat = async (req, res)=>{
    const catId = req.params.id
    
        try {
            const cat = await expeseCats.destroy({
                where: {
                    id: catId
                }
            });
            if (cat) {
                res.send({ msg: "Deleted sucessfully" })
            }
            else {
                res.status(400).send({ err: "Cart Not Available" })
            }
        }
        catch (err) {
            res.send({ err: err })
        }

    

}

module.exports = { createExpenceCat, viewExpenseCat, viewOneExpenseCat, updateExpenseCat,deleteExpenseCat }