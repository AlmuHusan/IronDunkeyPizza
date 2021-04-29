const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    //UserID: {type: String, unique: true, required: true},
    OrderList: {type: String, unique: false, required: true}
})
module.exports = mongoose.model('order', orderSchema, "orders");