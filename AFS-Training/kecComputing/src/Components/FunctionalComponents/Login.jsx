import React, { useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var navigate=useNavigate()
  var Login=async(e)=>{
    e.preventDefault()
    var req = await axios.post("https://afs-training.onrender.com/login",{
        email:email,
        password:password
  })
  console.log(req.data); 
  var isLoginSuccessfull =req.data.isLoggedIn
  console.log(isLoginSuccessfull);
  if(isLoginSuccessfull){
    navigate('/usememo')
    var message =req.data.message
    console.log(message);
  }
  else{
    
  }
}

  return (
    <div>
      <div style={{ textAlign: "left", margin: "20px" }}>
        <h2 style={{color:"blue"}}>Login</h2>
        <form onSubmit={Login}>
        <div>
          <label>Email:</label>
          <input type="email"name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" required/>
        </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
