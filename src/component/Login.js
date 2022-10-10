


  import React,{useState} from "react";
  import axios from "axios";



  const Login = () => {

    const [formData,setformData]=useState({Email:'',Password:'',})
   
    const handleEvent= async()=>{
        let response=await axios.post('http://localhost:4000/posts',formData)
        if(response){
            alert('data submitted successfully')
        }
        else{
            alert('something went wrong')
        }
        setformData({FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        Gender:'',
        Phone_Number:''
    })
  }
  return(
    <div className="container">
    <div className="py-4">
    <div className="login-div">  
      <h1 className="hadding">Login</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn-primary"  onClick={handleEvent}>
          Submit
        </button>
      </form>
    </div>
  </div>
  </div>
  )
  };
  
  export default Login;
  