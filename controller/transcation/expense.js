const { ExpenseTra } = require('../../models')
const createExpenseTranscation = async (req, res) => {
    const data = req.body;
    try {
        const day = data.day;
        const month = data.month;
        const year = data.year;
        const amount = data.amount;
        const desc = data.desc;
        const ExpenseCatId = data.ExpenseCatId;
        const tranction = await ExpenseTra.create({ day: day, month: month, year: year, amount: amount, desc: desc, expeseCatId: ExpenseCatId });
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

const viewExpenseTranscation = async (req, res) => {

    try {
        const tranction = await ExpenseTra.findAll();
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

const viewOneExpenseTranscation = async (req, res) => {
    const id = req.params.id;
    try {
        const tranction = await ExpenseTra.findByPk(id);
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

const updateExpenseTranscation = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const day = data.day;
    const month = data.month;
    const year = data.year;
    const amount = data.amount;
    const desc = data.desc;
    const ExpenseCatId = data.ExpenseCatId
    const updateData = { day: day, month: month, year: year, amount: amount, desc: desc, expeseCatId: ExpenseCatId }
    try {
        const tranction = await ExpenseTra.update(updateData, {
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

const deleteOneExpenseTranscation = async (req, res) => {
    const id = req.params.id;
    try {
        const tranction = await ExpenseTra.destroy({
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
    createExpenseTranscation,
    viewExpenseTranscation,
    viewOneExpenseTranscation,
    updateExpenseTranscation,
    deleteOneExpenseTranscation
}