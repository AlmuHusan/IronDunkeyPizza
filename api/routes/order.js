const express = require('express');
const router = express.Router();

const order = require('../model/order');

router.get('/', (req, res) => {
    order.find()
        .then(orders => res.json(orders))
        .catch(err => console.log(err))
});

router.post('/', (req, res) => {
    const { OrderList } = req.body;
    const newOrder = new order({
        OrderList: OrderList
    })
    newOrder.save()
        .then(() => res.json({
            message: "Created order successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating order"
        }))
});
module.exports = router; 