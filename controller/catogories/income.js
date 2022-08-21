const { IncomeCats } = require('../../models')

const createIncomeCat = async (req, res) => {
    const data = req.body;
    console.log("controller")
    if (data.name) {
        try {
            const result = await IncomeCats.create(data);
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

const viewIncomeCat = async (req, res) => {
    try {
        const cats = await IncomeCats.findAll();
        res.send(cats)
    }
    catch (err) {
        res.send({ err: err })
    }
}

const viewOneIncomeCat = async (req, res) => {
    const catId = req.params.id
    try {
        const cats = await IncomeCats.findOne({
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

const updateIncomeCat = async (req, res) => {
    const data = req.body;
    const catId = req.params.id
    if (data.name) {
        try {
            const cat = await IncomeCats.update(data, {
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

const deleteIncomeCat = async (req, res)=>{
    const catId = req.params.id
    
        try {
            const cat = await IncomeCats.destroy({
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

module.exports = { createIncomeCat, viewIncomeCat, viewOneIncomeCat, updateIncomeCat,deleteIncomeCat }