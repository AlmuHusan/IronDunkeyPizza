const express = require('express');
const router = express.Router()

const order = require('../model/order');

router.get('/', (req, res) => {
    order.find()
        .then(order => res(order))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { OrderList } = req.body;
    const newOrder = new order({
        OrderList: order
    })
    newOrder.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 