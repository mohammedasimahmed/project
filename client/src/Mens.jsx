// import { useState ,useEffect } from "react"
import { Products2 } from "./Products2"
// import { Link } from "react-router-dom"
// export default function Mens() {
//     const [menProductsArr,setMenProductsArr] = useState([])
//     const [menfind,setmenFind] = useState("")

//     useEffect(()=>{
//         menfunc()
//       },[menfind])

//     function menfunc(){
//     if (menfind === "" || menfind.trim() === "") {
//       setMenProductsArr([]);
//       return;
//     }
//             setMenProductsArr(
//             MensProducts.filter((item) =>
//             // item["title"].toLowerCase().includes(menfind.toLowerCase().trim())&&menfind.trim()  !==""
//               (item["title"].toLowerCase().startsWith(menfind.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(menfind.toLowerCase().trim()))
//               ||(menfind.length>=3 && item["title"].toLowerCase().includes(menfind.toLowerCase().trim()))
//               // item["title"].toLowerCase().includes(state.toLowerCase().trim())
//             )
//           );

//     }

//     return (
//         <>
//         {/* <form className="searchingflexbox">
//             <div className="searching">
//                 <h1>Search this site</h1>
//                 <h3>Click on search icon, then type your keyword.</h3>
//                 <div>
//                     <input 
//                     type="text" 
//                     placeholder="Search . . ." 
//                     required 
//                     value={menfind} 
//                     onChange={(e)=>setmenFind(e.target.value)}  
//                     className="menSearch"
//                     />
//                 </div>
//             </div>
//         </form> */}

//                 <div className="search">
//                     <label htmlFor="searchInput" className="searchLabelMain"></label>
//                     <input 
//                     type="text" 
//                     placeholder="Search..." 
//                     className="searchInput" 
//                     value={menfind} 
//                     onChange={(e)=>setmenFind(e.target.value)}
//                     />
//                     <img src="data:image/png;base64,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" width="20" height="20" alt="" className="searchIcon" />

//                 </div>   

//         <div className="searchSuggMen">
//                     {    
//                     menProductsArr.map((item)=>{
//                         return (
//                             <div className="menItem">
//                                <Link to={`/${item.title}`}>
//                                <h3 className="menItem" style={{color:"black"}}>{item.title}</h3>
//                                </Link> 
//                             </div>
//                         )
//                     })
//                     }
                    
//         </div>
//         </>
//     )
// }

import React from 'react'
import { Link,Outlet } from "react-router-dom"
// import AllShoes from './AllShoes';
import "./men.css";
import { NikeProducts } from "./products";
export default function men() {
  
//     const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
// let containerDimensions = item.getBoundingClientRect();
// let containerWidth = containerDimensions.width;

// nxtBtn[i].addEventListener('click', () => {
// item.scrollLeft += containerWidth;
// })

// preBtn[i].addEventListener('click', () => {
// item.scrollLeft -= containerWidth;
// })
// })


  return (
    <>

       <div class="top">
    <h2>Men</h2>
    <img src="https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
<p>Summer Essentials</p>
<h1>#JUST DO IT</h1>
<div class="summerInfo"><p>
    
    Move. Explore. Bring your boldest. </p><p>
    Get after summers endless possibilities with ready-for-anything fits.
    
  
    </p></div>

    <button  ><div><Link to="/allShoes">Shop</Link></div> 
  <Outlet/>  </button>
</div> 

{/* <!-- <div class="shopButton"> <h2>Classic Kicks You'l Love</h2>
// </div>
// <div class="shoesHover"></div> --> */}





<section class="product"> 
    <h2 class="product-category">best selling</h2>
    <button class="pre-btn"><img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="" /></button>
    <button class="nxt-btn"><img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="" /></button>
        <h1 style={{margin:"50px 200px"}}>Shoes</h1> 
    <div class="product-container">

        {
            Products2.map((item)=>{
                let ur = "/"+item.title
                return(
                    <Link to={ur}>
                    <div class="product-card">
                    <div class="product-image">
               
                        <img src={item.colors[0].img} class="product-thumb" alt="" />
                        <button class="card-btn">add to cart</button>
                    </div>
                    <div class="product-info">
                        <h2 class="product-Nike">{item.title}</h2>
                        <p class="product-short-description">about shoes..</p>
                        <span class="price">${item.price}</span>
                    </div>
                </div>
                </Link>
                )
            })
        }
        {/* <div class="product-card">
            <div class="product-image">
       
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike Air Force 1 '07 FlyEase</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$120</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
          
                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike1</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$100</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
       
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike2</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$130</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
              
                <img src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike3</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$133</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
              
                <img src="https://media.istockphoto.com/id/1306254732/photo/white-sneaker-on-a-orange-and-pink-gradient-background-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=5ox0aQ_xQXbdOqW91TWMsa_XiXFYup_sNqxhZQPz95c=" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike4</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
               
                <img src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike5</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
      
                <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike6</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                
                <img src="https://img.freepik.com/premium-photo/beautiful-white-sports-sneaker_88775-1231.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike7</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
            
                <img src="https://img.freepik.com/premium-photo/khaki-running-sneakers-trendy-neon-light_158023-1571.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike8</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
             
                <img src="https://img.freepik.com/premium-photo/running-sports-shoes-with-flying-laces_175682-3588.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike9</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div> */}
    </div>
    <h1 style={{margin:"50px 200px"}}>Clothing</h1>
    <div className="product-container">
        {
            
        }
    </div>

</section>



<h2 class="thelastest">The Latest</h2>
<div class="thelastest">
    



<div class="imgColumn1 imgsize" >
    <img src="https://images.unsplash.com/photo-1585843736857-bd7438e55c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1604694059170-4e97188079a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTAxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1530303848045-ce0a70903a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />


   
</div>
<div class="imgColumn2 imgsize" >
    <img src="https://images.unsplash.com/photo-1636718283028-bb6845dbf3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjQ1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTY2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
</div>
<div class="imgColumn3 imgsize" >
    <img src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1609535766106-0864edad28e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</div>


</div>

<div class="bottom">
    <p>Just In</p>
    <h1>NIKE AIR MAX PULSE</h1>
    <div class="bottomInfo"><p>Powered by the underground sounds of London comes a silhouette infused with an unreal sensation of</p>  <p>
        Air and durable design details, now in a new colour. </p>
        <p>
        Shop the Air Max Pulse in Cobblestone.
        </p></div>
       
    <button > <Link to= "AllShoes">Shop</Link>
    </button>
</div>
        <footer>
        <div class="first-line">
<ul>
    <li><a href="">FIND A STORE</a> </li>
    <li><a href=""> BECOME A MEMBER</a></li>
    <li><a href="">Send Us Feedback</a> </li>
    <li><a href="">STUDENT DISCOUNT</a> </li>
</ul>
        </div>

        <div class="second-line">
           <ul>
            <li> <a href="">order status</a></li>
            <li><a href="">Payment Options</a> </li>
            <li><a href="">Contact us on nike.com</a> </li>
            <li><a href="">Contact us on other</a> </li>
           </ul>
        </div>
       
        <div class="third-line">
            <ul>
                <li>ABOUT NIKE</li>
                <li><a href="">News</a> </li>
                <li><a href="">Careers</a> </li>
                <li><a href="">Investors</a> </li>
               
            </ul>
        </div>
        
        <div class="forth-line">
            <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" /></button></div>
          <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt="" /></button></div>
          <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="" /></button></div>
          
        </div>
        </footer>


</>
      
  )
}
