import { useEffect, useState } from "react"
import "./App.css"
import "./style.css"
import {products} from "./ProductsData"
import { Routes , Route, useNavigate } from "react-router-dom"
import ShoeCard from "./ShoeCard"
import Cart from "./Cart"
import Users from "./Users"
import MainBody from "./MainBody"
import Register from "./Register"
import Login from "./Login"
import NewFeatured from "./NewFeatured"
import Mens from "./Mens"
import Kids from "./Kids"
import Womens from "./Womens"
import AllShoes from "./AllShoes"
import { NikeProducts } from "./products"

export default function App(){
    const [translate,setTranslate] = useState(0)
    const [colorindex,setColorIndex] = useState(0)
    const [val,setVal] = useState(false)
    const [find,setFind] = useState("")
    const [productsArr,setProductsArr] = useState([])
    const [state,setState] = useState({
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "../img/air.png",
          },
          {
            code: "darkblue",
            img: "../img/air2.png",
          },
        ],
      })

      const [dataFromChild, setDataFromChild] = useState("");
      const [formData, setFormData] = useState("");
      const [token, setToken] = useState("");

      useEffect(()=>{
        if(localStorage.getItem("username")!==null){
        setDataFromChild(localStorage.getItem("username").slice(1,-1))
          console.log(localStorage.getItem("username"))
        }
        },[dataFromChild])

        useEffect(()=>{
          if(localStorage.getItem("token")!==null){
          setToken(localStorage.getItem("token").slice(1,-1))
            console.log(localStorage.getItem("token"))
          }
          },[token])

      const handleDataFromChild = (data) => {
        setDataFromChild(data.username);
        setFormData(data)
      };
      const handleTokenFromChild = (data) => {
        setToken(data)
      };

      useEffect(()=>{
        // setProductsArr(()=>{
        //     products.filter((item)=> item.title.includes(find) )
        // })
        func()
        console.log(productsArr)
      },[find])
      const navigate = useNavigate()
      function func(){
    if (find === "" || find.trim() === "") {
      setProductsArr([]);
      return;
    }
            setProductsArr(
            NikeProducts.filter((item) =>
            // item["title"].toLowerCase().includes(find.toLowerCase().trim())&&find.trim()  !==""
              (item["title"].toLowerCase().startsWith(find.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(find.toLowerCase().trim()))
              ||(find.length>=3 && item["title"].toLowerCase().includes(find.toLowerCase().trim()))
              // item["title"].toLowerCase().includes(state.toLowerCase().trim())
            )
          );

    }
    function slides(item){
        setTranslate((Number(item.id))-1)
        setState(item)
        setColorIndex(0)
    }
  return(
    <>
    <Routes>
    <Route path="/" element={  
    <MainBody 
    find={find}  
    setFind={setFind}
    translate={translate}
    productsArr={productsArr}
    state={state}
    colorindex={colorindex}
    setColorIndex={setColorIndex}
    val={val}
    setVal={setVal}
    slides={slides}
    username={dataFromChild}
    setUsername={setDataFromChild}
    formData={formData}
    setFormData={setFormData}
    handleTokenFromChild={handleTokenFromChild}
    />} />
    {
        NikeProducts.map((item)=>{
            return(
                <Route path={item.title} element={<ShoeCard   
                item={item}
                title={item.title}
                price={item.price}
                username={dataFromChild}
                token={token}
                />} />
            )
        })
    }
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login handleDataFromChild={handleDataFromChild} handleTokenFromChild={handleTokenFromChild} />}/>
    <Route path="/newfeatured" element={<NewFeatured />}/>
    <Route path="/mens" element={<Mens />}/>
    <Route path="/womens" element={<Womens />}/>
    <Route path="/kids" element={<Kids />}/>
    <Route path="/allShoes" element={<AllShoes />}/>
    { dataFromChild==="admin" && <Route path="/users" element={<Users />}/>}
    <Route path="/users" element={<Users />}/>
    { dataFromChild!=='' &&   <Route path="/cart" element={<Cart username={dataFromChild} token={token} />}/>}
    {/* <Route path="/cart" element={<Cart username={dataFromChild} />}/> */}
    {true && <Route path="/demo/trial" element={<h1>hello</h1>}/>}
    <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes> 
    </>
  )
}