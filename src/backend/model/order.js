const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    //UserID: {type: String, unique: true, required: true},
    OrderList: {type: Object, unique: false, required: true}
})
module.exports = mongoose.model('Order', orderSchema);