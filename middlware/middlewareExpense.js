const { expeseCats, IncomeCats } = require('../models');

const duplicateExpeseCatCheck = async (req, res, next) => {
    const data = req.body;
    if (data.name) {

        try {
            const cats = await expeseCats.findOne({
                where: {
                    name: data.name
                }
            })
            if (cats) {
                res.status(400).send({ err: "Category name availabe" })
            }
            else {
                next()
            }
        }
        catch (err) {
            res.status(500).send({ err: err })
        }
    }
    else {
        res.status(400).send({ err: "Name mandotory" })
    }

}

const duplicateIncomeCatCheck = async (req, res, next) => {
    const data = req.body;
    console.log("middleware")
    if (data.name) {

        try {
            const cats = await IncomeCats.findOne({
                where: {
                    name: data.name
                }
            })
            if (cats) {
                res.status(400).send({ err: "Category name availabe" })
            }
            else {
                next()
            }
        }
        catch (err) {
            res.status(500).send({ err: err })
        }
    }
    else {
        res.status(400).send({ err: "Name mandotory" })
    }

}

module.exports = {duplicateExpeseCatCheck, duplicateIncomeCatCheck}