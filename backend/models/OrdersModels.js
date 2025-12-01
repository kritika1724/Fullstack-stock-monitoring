const mongoose = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

const OrderModel =
  mongoose.models.orders || mongoose.model("orders", OrdersSchema);

module.exports = { OrderModel };
