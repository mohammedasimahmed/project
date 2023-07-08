import { useState } from "react";
import "./login.css"
import axios from "axios"
import { useNavigate , Link } from "react-router-dom";
export default function Login({handleDataFromChild , handleTokenFromChild}){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
      const navigate = useNavigate()
      const { username, password } = formData;
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleDataFromChild(formData)
        try {
          await axios.post('http://localhost:8080/api/auth/signin', formData).then(
            res =>{
              console.log(res);
              handleTokenFromChild(res.data.jwtToken)
              localStorage.setItem("username", JSON.stringify(res.data.username));
              localStorage.setItem("token", JSON.stringify(res.data.jwtToken));
              navigate("/")
            }
          )
          .catch(error=>{
            console.error('Request failed:');
            alert("incorrect login credentials")
          })
          // console.log(res)
        } catch (e) {
          alert(e)
        }

      };

    return(
        <div className="loginContainer">
    <div className="backgroundLogin">
        <div className="LoginShape"></div>
        <div className="LoginShape"></div>
    </div>
    <form onSubmit={handleSubmit} className="loginForm">
        <h3>Login Here</h3>

        <label htmlFor="username" className="loginLabel">Username</label>
        <input className="loginInput" type="text" placeholder="username" id="username" name="username" value={username} onChange={handleChange}/>

        <label htmlFor="password" className="loginLabel">Password</label>
        <input className="loginInput" type="password" placeholder="Password" id="password" name="password" value={password} onChange={handleChange} />

        <button className="login">Log In</button>
        <p className="redirect" style={{marginTop:"30px"}}>Don't have an account?<Link to="/register" style={{color:"blue"}}>Register Now</Link></p>
    </form>
        </div>
    )
}