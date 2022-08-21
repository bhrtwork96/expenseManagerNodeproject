const { IncomeTra } = require('../../models')
const createIncomeTranscation = async (req, res) => {
    const data = req.body;
    try {
        const day = data.day;
        const month = data.month;
        const year = data.year;
        const amount = data.amount;
        const desc = data.desc;
        const IncomeCatId = data.IncomeCatId;
        const tranction = await IncomeTra.create({ day: day, month: month, year: year, amount: amount, desc: desc, IncomeCatId: IncomeCatId });
        if (tranction) {
            res.send({ msg: "transaction add sucessfully" })
        }
        else {
            res.send({ err: "some error" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err })
    }
}

const viewIncomeTranscation = async (req, res) => {

    try {
        const tranction = await IncomeTra.findAll();
        if (tranction) {
            res.send(tranction)
        }
        else {
            res.send({ err: "some error" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err })
    }
}

const viewOneIncomeTranscation = async (req, res) => {
    const id = req.params.id;
    try {
        const tranction = await IncomeTra.findByPk(id);
        if (tranction) {
            res.send(tranction)
        }
        else {
            res.send({ err: "id invalid" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err })
    }
}

const updateIncomeTranscation = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const tranction = await IncomeTra.update(data, {
            where: {
                id: id
            }
        });
        if (tranction) {
            res.send({ msg: "Updated sucessfully" })
        }
        else {
            res.send({ err: "Id invalid" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err })
    }
}

const deleteOneIncomeTranscation = async (req, res) => {
    const id = req.params.id;
    try {
        const tranction = await IncomeTra.destroy({
            where: {
                id: id
            }
        });
        if (tranction) {
            res.send({ msg: "Deleted" })
        }
        else {
            res.send({ err: "id invalid" })
        }
    }
    catch (err) {
        res.status(500).send({ err: err })
    }
}






module.exports = {
    createIncomeTranscation,
    viewIncomeTranscation,
    viewOneIncomeTranscation,
    updateIncomeTranscation,
    deleteOneIncomeTranscation
}