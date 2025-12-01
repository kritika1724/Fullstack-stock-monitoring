import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map((order) => {
                const total = order.qty * order.price;
                const modeClass = order.mode === "BUY" ? "profit" : "loss";

                return (
                  <tr key={order._id}>
                    <td>{order._id.slice(-6)}</td> {/* short id */}
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{order.price.toFixed(2)}</td>
                    <td>₹{total.toFixed(2)}</td>
                    <td className={modeClass}>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
