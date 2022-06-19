import "./Signup.css"
import {Link} from "react-router-dom"
import { useState } from "react"

import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const Signup=()=>{

    const navigate=useNavigate()

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    const signup=()=>{
        

        let data={
            "email": email,
            "password": password
        }

        axios({  
            method: 'post',  
            url: 'https://reqres.in/api/users',  
            data: {  
              "email": email,  
              "password": password 
            }  
          }).then((res) => { navigate("/login")})
  
          // Catch errors if any
          .catch((err) => { alert("fill all entry")});
        

        
    }

    return(
        <div>
            <img style={{marginTop:"30px"}} src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="" />
            <div  className="mycontainer">
                <h1 >Create Account</h1>
                {/* <label htmlFor="">Your name</label> */}
                <p className="label" style={{textAlign:"left",marginBottom:"-20px"}}>Your Name</p>
                <br />
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="form-control" type="text" />
                <br />
                
                <p className="label" style={{textAlign:"left",marginBottom:"-20px"}}>Email</p>
                <br />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control" type="email" />
                <br />
                <p className="label" style={{textAlign:"left",marginBottom:"-20px"}}>Password</p>
                <br /> 
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="form-control" type="password" />

                <button onClick={signup} className="myyellowbutton">Create your Amazon account</button>
                {/* <br /> */}
                <p className="label">By creating an account, you agree to the Amazon <span style={{color:"#3f84d3"}}>Conditions of Use and Privacy Notice.</span> </p>
                <p>Already have an account?<Link style={{textDecoration:"none",color:"#2b7eba"}} to="/Login">Sign-In</Link></p>


            </div>
        </div>
    )
}