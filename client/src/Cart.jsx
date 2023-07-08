import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart({ username, token }) {
  const [displayCartData, setDisplayCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    cartDisplay();
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [displayCartData]);

  const navigate = useNavigate();

  async function deleteItem(username, color, title) {
    try {
      await axios.delete(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`);
      const response = await axios.get(`http://localhost:8080/api/test/carts/${username}`);
      setDisplayCartData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateCart(value, username, color, title, price) {
    try {
      await axios.put(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`, {
        title: title,
        price: `$${price}`,
        username: username,
        quantity: value,
        color: color,
      });
      const updatedData = displayCartData.map((item) => {
        if (
          item.title === title &&
          item.username === username &&
          item.color === color
        ) {
          return { ...item, quantity: value };
        }
        return item;
      });
      setDisplayCartData(updatedData);
    } catch (error) {
      console.error(error);
    }
  }

  async function cartDisplay() {
    try {
      const response = await axios.get(`http://localhost:8080/api/test/carts/${username}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setDisplayCartData(response.data);
    } catch (error) {
      console.error(error);
      alert("Session expired. Please log in again.");
      navigate("/login");
    }
  }


  function calculateTotalAmount() {
    let sum = 0;
    displayCartData.forEach((item) => {
      const price = parseFloat(item.price.substring(1));
      sum += price * item.quantity;
    });
    setTotalAmount(sum);
  }

  return (
    <div className="CartContainer">
      <center>
        <h1 style={{ color: "white" }}>Your Cart</h1>
      </center>
      <div className="TableContainer">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {displayCartData.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <h1 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                    Cart is empty
                  </h1>
                </td>
              </tr>
            ) : (
              displayCartData.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  username={username}
                  updateCart={updateCart}
                  deleteItem={deleteItem}
                  calculateTotalAmount={calculateTotalAmount}
                />
              ))
            )}
          </tbody>
        </table>
        <h1 style={{ color: "white", fontWeight: "bold", marginBottom: "10px" }}>
          Total: {totalAmount}
        </h1>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={()=>alert("successfully placed order")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
