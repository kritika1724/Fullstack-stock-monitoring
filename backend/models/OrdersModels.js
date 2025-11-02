const {model} = require("mongoose");
const {OrdersSchema} = require("../schema/OrdersSchema");
const {OrdersModel} = new model("position" ,OrdersSchema );
module.exports = {OrdersModel};