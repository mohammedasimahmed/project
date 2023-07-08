import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function ShoeCard({ item , title , price , username , token}){
    const [colorindex , setColorIndex] = useState(0);
    const [quantity , setQuantity] = useState(1);
    const navigate = useNavigate()
    //   const { usernames, titles, prices , colors } = cardData;
      async function handleAddToCart(cardData){
        try {
          await axios.post('http://localhost:8080/api/test/cart', cardData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(res => {
            console.log(res.data);
            alert("Added to cart");
          })
          .catch(error=>{
              console.error('Request failed:');
              alert("user already registered")
            })
            // console.log(res)
          } catch (e) {
            alert(e)
          }
  
        };
      
    return(

<>
<main class="productDetailsPage">

<div class="left-column">
  {/* <img data-image="black" src={item.colors[colorindex].img} alt="" /> */}
  {/* <img data-image="blue" src={item.colors[colorindex].img} alt="" /> */}
  <img data-image="red" class="active" src={item.colors[colorindex].img} alt="" style={{marginLeft:"-150px"}}  />
</div>


<div class="right-column">

  <div class="product-description">
    <span>Products</span>
    <h1>{title}</h1>
    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
  </div>

  <div class="product-configuration">

    <div class="product-color">
      <span>Color</span>

      <div class="color-choose" >
        <div>
          <input data-image="red" type="radio" id="red" name="color" value="red" checked/>
          <label for="red" ><span style={{backgroundColor:item.colors[0].code}} onClick={()=>setColorIndex(0)}></span></label>
        </div>
        <div>
          <input data-image="blue" type="radio" id="blue" name="color" value="blue" style={{backgroundColor:item.colors[1].code}} />
          <label for="blue"><span style={{backgroundColor:item.colors[1].code}} onClick={()=>setColorIndex(1)}></span></label>
        </div>
      </div>

    </div>
  </div>

  <div class="product-price">
    <span>${price}</span>
    {/* <a href="#" class="cart-btn" onClick={handleAddToCart}>Add to cart</a> */}
    <button className="cart-btn" onClick={()=>handleAddToCart({
                    "title":title,
                    "price":`$${price}`,
                    "username":username,
                    "quantity":quantity,
                    "color":item.colors[colorindex].code
                
            })}>Add to Cart</button>
  </div>
</div>
</main>
<h1 style={{color:"black" , cursor:"pointer" , zIndex:"100" ,position:"absolute",bottom:"0px"}} onClick={()=>navigate(-1)}>Go Back</h1>

</>

    )
}