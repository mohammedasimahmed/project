import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
export default function Users (){

    const[users,setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    },[])

    async function getUsers(){
        const response = await axios.get("http://localhost:8080/api/test/users");
        console.log(response.data);
        setUsers(response.data)
    }

    return(
        <>
        <center> <h1>All Users</h1></center>
        <div className="UsersContainer">
        <div className="userTitle">
                        <h1 style={{ marginLeft:"-100px"}} >Username</h1>
                        <h1 style={{ marginLeft:"-100px"}} >Email</h1 >
        </div>
        {
            users.map((item)=>{
                return(
                    <div className="user">
                        <h1 style={{fontWeight:"normal"}}>{item.username}</h1>
                        <h1 style={{fontWeight:"normal"}}>{item.email}</h1 >
                    </div>
                )
            })
        }
        </div>
        </>
    )
}