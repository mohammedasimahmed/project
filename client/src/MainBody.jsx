import {products} from "./ProductsData"
import { Link } from "react-router-dom"
import VoiceSearch from "./VoiceSearch"
import axios from "axios"
import { NikeProducts } from "./products"
export default function MainBody({ find , setFind , translate , productsArr , state ,
     colorindex , setColorIndex , val , setVal , slides , username ,setUsername ,formData , setFormData  }){
        const NikeProductsArr = NikeProducts.filter(item => item.id<=8)
        console.log(NikeProductsArr)
        async function Logout(){

            try {
                await axios.post('http://localhost:8080/api/auth/signout', formData).then(
                  res =>{
                    console.log(res.data);
                  }
                )
                .catch()
                // console.log(res)
              } catch (e) {
                alert(e)
              }

            localStorage.removeItem("username");
            localStorage.removeItem("token");
            alert("Logged out Successfully")
            setUsername("")
        }

    return(
        <>
    <div className="aboveNav">
        <Link to="/newfeatured">
        <p className="newfeatured">
            New and Featured
        </p>
        </Link>
        <Link to="/mens">
        <p className="Mens">
            Mens
        </p>
        </Link>
        <Link to="/womens">
        <p className="Womens">
            Womens
        </p>
        </Link>
        <Link to="/kids">
        <p className="Kids">
            Kids
        </p>
        </Link>
    </div>
    <nav id="nav">
        <div className="navTop">
            <div className="navItem">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAB7CAMAAADe1Jt9AAAAY1BMVEUAAAD////6+vry8vIwMDAcHByzs7P39/fj4+Pq6urm5uYLCwslJSVBQUFtbW0UFBSioqI6OjqUlJS9vb2oqKhfX19UVFR+fn7S0tJlZWWbm5vHx8dPT0/a2tqKiop3d3dISEgl2BV0AAACUElEQVR4nO3Y6XaCMBAFYMISliqySjCyvP9TlopUkEWlE7Tn3O93nbnHDBOLpgEAAAAAAAAAAAAAAADAv/L1f6rvIouy3MA+94+kBeOMtNzNIRI825GWFB5puavaTwxd7omrBqwirqhpZiAMxoKaum7ACtqDOpaxzhgrStKqFz5jnK7a4ciL5itlTPgHuqqduilNNVf5SbILm5+JSg45TWmCMlaYSdduoxqnkKDiBN4Uj/9axKp4wTpCwai2sp/yf1qy5jkq7N+ktkyV3YXhpU2++vNmGXusJ0kJw927PA/GuttwnyduPyjzFN7Z2nUImLtiGYSBHCZlTqZgVfU7Gm3Y+rWPHbPLzu+zJe1vlQn8umleaXTkwmD3EuVRtXPX68lfBlYeyVHO5vwjtTFbomv3zG1rVdKxp6JWtL8rZvi3jg8eDbNKiomcjOmxylXVJ25NF66wXRgV4yFtZz2pN4qqmf2+wfTf7EvuTQf9GVW1q2qAD1pzcxQ05e7UkLbnX+RKL4A7pjNs7w2e6TSQM2ffjs1Wo3pVTXxbpypNU7/kzv3OH3CTTZ7/vmQpz1LUcjQw6rmPc43pQv1VNWVN1q1HtWO9nNQJ1L5hWmA+TjfgZW8Y1c7upahy/f8SJJ5PasfUb4BetrTzB+cfbL5Vx/jjnM2qcqotb9VZ+RNZpf/ulFdf4kFSl3/A+XfqxajG6Y2rakI5P6pC1Yvw9WbS6kpfq6x2Hs+tw9+8/+dZVT+uLqL0syZ1JI8SznkS+R+eEwAAAAAAAAAAAAAAAAAU+gaJ8Ra9rgPu7QAAAABJRU5ErkJggg==" alt="" />
            </div>

            {
                username!=='' &&             <Link to="/cart">
                <div className="cart">
                <h1 style={{color:"white"}}>Cart</h1>
                <img src="https://tse1.mm.bing.net/th?id=OIP.PmmZjMlEPB_H0s2T-nYR7QHaHa&pid=Api&P=0&h=180" alt="" className="cartImage" />
                </div>
                </Link>
            }

            <div className="navItemSearch">
                {/* <div className="search">
                    <label htmlFor="searchInput" className="searchLabelMain"></label>
                    <input 
                    type="text" 
                    placeholder="Search..." 
                    className="searchInput" 
                    value={find} 
                    onChange={(e)=>setFind(e.target.value)}
                    />
                    <img src="data:image/png;base64,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" width="20" height="20" alt="" className="searchIcon" />

                </div>    */}

    <div className="searchingflexbox">
            <div className="searching">
                {/* <h1>Search this site</h1> */}
                {/* <h3 style={{color:"white"}}>Click on search icon, then type your keyword.</h3> */}
                <div>
                    <input 
                    type="text" 
                    placeholder="Search . . ." 
                    required 
                    value={find} 
                    onChange={(e)=>setFind(e.target.value)}  
                    className="menSearch"
                    />
                </div>
            </div>
        </div>
           

            {/* <h1>hi</h1> */}
            {/* <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1> */}
            </div>
            <VoiceSearch setFind={setFind}/>  
            <div className="navItem">
                
                <span className="limitedOffer b">Nike Pay</span>
                {
                    username===''&&  (<Link to="/register">
                    <span className="register b" >Register</span>
                    </Link >)
                }
                {
                    username!==''&&  ( <span style={{marginLeft:"10px"}}>{username}</span>)
                }
                {
                    username===''&&  (<Link to="/login">
                    <span className="loginPage b">Login</span>
                    </Link>)
                }
                {
                    username!==''&&  (<span style={{marginLeft:"10px" , cursor:"pointer"}} onClick={Logout}>Logout</span>)
                }
            </div>
        </div>
        {
            username==="admin" && <Link to="/users"><h1 style={{marginLeft:"1302px",cursor:"pointer",color:"white"}} >All Users</h1></Link>
        }
        <div className="searchSugg">
                    {    
                    productsArr.map((item)=>{
                        return (
                            <div className="suggItem" style={{padding:"7px"}}>
                               <Link to={item.title}>
                               <h3 className="suggItem" style={{color:"black"}} >{item.title}</h3>
                               </Link> 
                            </div>
                        )
                    })
                    }
        </div>

        {/* <div className="searchSuggMen" style={{position:"absolute" , marginTop:"-35px" , marginLeft:"370px"}}>
                    {    
                    productsArr.map((item)=>{
                        return (
                            <div className="menItem" >
                               <Link to={`/${item.title}`}>
                               <h3 className="menItem" style={{color:"black"}}>{item.title}</h3>
                               </Link> 
                            </div>
                        )
                    })
                    }  
        </div> */}

        <div className="navBottom">
            {/* <h3 class="menuItem">AIR FORCE</h3>
            <h3 class="menuItem">JORDAN</h3>
            <h3 class="menuItem">BLAZER</h3>
            <h3 class="menuItem">CRATER</h3>
            <h3 class="menuItem">HIPPIE</h3> */}
            {
                products.map((item)=>{
                    return <h3 className="menuItem" onClick={()=>slides(item)} >{item.title}</h3>
                })
            }
        </div>
    </nav>
    <div className="slider">
        <div className="sliderWrapper" style={{transform:`translateX(${-100 * translate}vw)`}}>
            {/* <div className="sliderItem">
                <img src="../img/air.png" className="sliderImg" id="airforce" />
                <div className="sliderBg"></div>
                <h1 className="sliderTitle">AIR FORCE<br /> NEW <br /> SEASON</h1>
                <h2 className="sliderPrice">$119</h2>
                <a href="#product">
                    <button className="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div className="sliderItem">
                <img src="../img/jordan.png" className="sliderImg" />
                <div className="sliderBg"></div>
                <h1 className="sliderTitle">AIR JORDAN<br /> NEW<br /> SEASON</h1>
                <h2 className="sliderPrice">$149</h2>
                <a href="#product">
                    <button className="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div className="sliderItem">
                <img src="../img/blazer.png" alt="" className="sliderImg" />
                <div className="sliderBg"></div>
                <h1 className="sliderTitle">BLAZER<br /> NEW<br /> SEASON</h1>
                <h2 className="sliderPrice">$109</h2>
                <a href="#product">
                    <button className="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div className="sliderItem">
                <img src="../img/crater.png" alt="" className="sliderImg" />
                <div className="sliderBg"></div>
                <h1 className="sliderTitle">CRATER<br /> NEW<br /> SEASON</h1>
                <h2 className="sliderPrice">$129</h2>
                <a href="#product">
                    <button className="buyButton">BUY NOW!</button>
                </a>
            </div>
            <div className="sliderItem">
                <img src="../img/hippie.png" alt="" className="sliderImg" />
                <div className="sliderBg"></div>
                <h1 className="sliderTitle">HIPPIE<br /> NEW<br /> SEASON</h1>
                <h2 className="sliderPrice">$99</h2>
                <a href="#product">
                    <button className="buyButton">BUY NOW!</button>
                </a>
            </div> */}

            {
                products.map((item)=>{
                    return(
                        <div className="sliderItem">
                        <img src={item.colors[0].img} alt="" className="sliderImg" />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">{item.title}<br /> NEW<br /> SEASON</h1>
                        <h2 className="sliderPrice">${item.price}</h2>
                        <a href="#product">
                            <button className="buyButton">BUY NOW!</button>
                        </a>
                    </div>
                    )
                })
            }

        </div>
    </div>
   
    <div className="features">
        <div className="feature">
            <img src="data:image/png;base64,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" alt="" className="featureIcon" />
            <span className="featureTitle">FREE SHIPPING</span>
            <span className="featureDesc">Free worldwide shipping on all orders.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2YFACZnuBgXdhfXhj7RDhSGWD82mKuc93qeEKuE&s" alt="" />
            <span className="featureTitle">30 DAYS RETURN</span>
            <span className="featureDesc">No question return and easy refund in 14 days.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="data:image/png;base64,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" alt="" />
            <span className="featureTitle">GIFT CARDS</span>
            <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzejEdEmKvmvS5f4ZQff74rOCiXQgP-ctr-g&usqp=CAU" alt="" />
            <span className="featureTitle">CONTACT US!</span>
            <span className="featureDesc">Keep in touch via email and support system.</span>
        </div>
    </div>

    <div className="product" id="product">
        <img src={state.colors[colorindex].img} alt="" className="productImg"/>
        <div className="productDetails">
            <h1 className="productTitle">{state.title}</h1>
            <h2 className="productPrice">${state.price}</h2>
            <p className="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div className="colors">
                <div className="color" onClick={()=>setColorIndex(0)} style={{backgroundColor:state.colors[0].code}}></div>
                <div className="color" onClick={()=>setColorIndex(1)} style={{backgroundColor:state.colors[1].code}}>  </div>
                {/* {
                    products.map((item)=>{
                        <div classNameName="color">{item.colors}</div>
                    })
                } */}
            </div>
            {/* <div className="sizes">
                <div className="size">42</div>
                <div className="size">43</div>
                <div className="size">44</div>
            </div> */}
            <Link to={state.title}>
            <button className="productButton" >BUY NOW!</button>
            </Link>
        </div>
        {
            val && (
                <div className="payment">
                <h1 className="payTitle">Personal Information</h1>
                <label>Name and Surname</label>
                <input type="text" placeholder="Enter your Name" className="payInput" />
                <label>Phone Number</label>
                <input type="text" placeholder="+1 234 5678" className="payInput" />
                <label>Address</label>
                <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
                <h1 className="payTitle">Card Information</h1>
                <div className="cardIcons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" width="40" alt="" className="cardIcon" />
                    <img src="data:image/png;base64,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" alt="" width="40" className="cardIcon" />
                </div>
                <input type="password" className="payInput" placeholder="Card Number" />
                <div className="cardInfo">
                    <input type="text" placeholder="mm" className="payInput sm" />
                    <input type="text" placeholder="yyyy" className="payInput sm" />
                    <input type="text" placeholder="cvv" className="payInput sm" />
                </div>
                <span className="close" onClick={()=>setVal(false)}>X</span>
                <button className="payButton" onClick={()=>setVal(false)}>Checkout!</button>
            </div>
            )
        }
    </div>
    <div className="gallery">
        <div className="galleryItem">
            <h1 className="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg" />
        </div>
        <div className="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg" />
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg" />
        </div>
    </div>
    <div className="newSeason">
        <div className="nsItem">
            <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="nsImg" />
        </div>
        <div className="nsItem">
            <h3 className="nsTitleSm">WINTER NEW ARRIVALS</h3>
            <h1 className="nsTitle">New Season</h1>
            <h1 className="nsTitle">New Collection</h1>
            <a href="#nav">
                <button className="nsButton">CHOOSE YOUR STYLE</button>
            </a>
        </div>
        <div className="nsItem">
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="nsImg" />
        </div>
    </div>
    <footer style={{backgroundColor:"white",color:"black"}}>
        <div className="footerLeft">
            <div className="footerMenu">
                <h1 className="fMenuTitle">About Us</h1>
                <ul className="fList">
                    <li className="fListItem">Company</li>
                    <li className="fListItem">Contact</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Affiliates</li>
                    <li className="fListItem">Stores</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Useful Links</h1>
                <ul className="fList">
                    <li className="fListItem">Support</li>
                    <li className="fListItem">Refund</li>
                    <li className="fListItem">FAQ</li>
                    <li className="fListItem">Feedback</li>
                    <li className="fListItem">Stories</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Products</h1>
                <ul className="fList">
                    <li className="fListItem">Air Force</li>
                    <li className="fListItem">Air Jordan</li>
                    <li className="fListItem">Blazer</li>
                    <li className="fListItem">Crater</li>
                    <li className="fListItem">Hippie</li>
                </ul>
            </div>
        </div>
        <div className="footerRight">
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
                <div className="fMail">
                    <input type="text" placeholder="your@email.com" className="fInput" />
                    <button className="fButton">Join!</button>
                </div>
            </div>
            <div className="footerRightMenu">
                <h1 className="fMenuTitle">Follow Us</h1>
                <div className="fIcons">
                    <img src="data:image/png;base64,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" alt="" className="fIcon" />
                    <img src="data:image/png;base64,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" alt="" className="fIcon" />
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt="" className="fIcon" />
                    <img src="data:image/png;base64,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" alt="" className="fIcon" />
                </div>
            </div>
            <div className="footerRightMenu">
                <span className="copyright">@Ace. All rights reserved. 2022.</span>
            </div>
        </div>
    </footer>
        </>
    )
}