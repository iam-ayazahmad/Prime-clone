import "./Login.css"
import {Link} from "react-router-dom"

export const Login=()=>{
    return(
        <div>
            <img style={{marginTop:"30px"}} src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="" />
            <div  className="mycontainer">
                <h1 >Sign-In</h1>
                {/* <label htmlFor="">Your name</label> */}
                
                
                <p className="label" style={{textAlign:"left",marginBottom:"-20px"}}>Email or mobile phone number</p>
                <br />
                <input placeholder="Email" className="form-control" type="text" />
                <br />
                <p className="label" style={{textAlign:"left",marginBottom:"-20px"}}>Password</p>
                <br /> 
                <input placeholder="password" className="form-control" type="text" />

                <button className="myyellowbutton">Sign in</button>
                {/* <br /> */}
                <p className="label">By continuing, you agree to the Amazon <span style={{color:"#3f84d3"}}>Conditions of Use and Privacy Notice.</span> </p>
               <Link to="/Signup"><button className="mygraybutton">Create your Amazon account</button></Link>


            </div>
        </div>
    )
}