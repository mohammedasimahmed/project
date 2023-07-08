  import axios from "axios";
  import { useEffect, useState } from "react";
  import CartItem from "./CartItem";
  import { useNavigate } from "react-router-dom";

  export default function Cart({ username, token }) {
    const [displayCartData, setDisplayCartData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
      cartDisplay();
      console.log(token)
    }, []);

    useEffect(() => {
      calculateTotalAmount();
      console.log("hello")
    }, [displayCartData]);

    const navigate = useNavigate()

    async function deleteItem(username, color, title) {
      await axios
        .delete(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`)
        .then((response) => {
          console.log(response);
          // Handle successful response
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });

      const response = await axios.get(`http://localhost:8080/api/test/carts/${username}`);
      // Handle the response data
      console.log(response.data);
      let responseData = response.data;
      // responseData = responseData.filter((item) => item.username === username);
      console.log(responseData);

      setDisplayCartData(responseData);
    }

    async function updateCart(value, username, color, title, price) {
      await axios
        .put(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`, {
          title: title,
          price: `$${price}`,
          username: username,
          quantity: value,
          color: color,
        })
        .then((response) => {
          // Handle the response data
          console.log(response.data);
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
          console.log(updatedData);
          setDisplayCartData(updatedData);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    }

    async function cartDisplay() {
      try {
        console.log(token)
        const response = await axios.get(`http://localhost:8080/api/test/carts/${username}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        // Handle the response data
        console.log(response.data);
        let responseData = response.data;
        // responseData = responseData.filter((item) => item.username === username);
        console.log(responseData);

        setDisplayCartData(responseData);

        // const token = localStorage.getItem("token");
        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // };
        
        // axios.get("http://localhost:8080/api/test/carts/" + username, config)
        //   .then((response) => {
        //     // Handle the response
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     // Handle the error
        //     console.error(error);
        //   });

      } catch (error) {
        // Handle the error
        console.error(error);
        alert("login again session expired")
        console.log("hi")
        navigate("/login")
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
              {displayCartData.length === 0 && (
                <>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Cart is empty
                  </h1>
                </>
              )}
              {displayCartData.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    item={item}
                    username={username}
                    updateCart={updateCart}
                    deleteItem={deleteItem}
                    calculateTotalAmount={calculateTotalAmount}
                  />
                );
              })}
            </tbody>
          </table>
          <h1 style={{ color: "white", fontWeight: "bold", marginBottom: "10px" }}>
            Total: {totalAmount}
          </h1>
          <button style={{ backgroundColor: "green", color: "white", padding: "10px", fontWeight: "bold", cursor: "pointer" }}>Place Order</button>
        </div>
      </div>
    );
  }
