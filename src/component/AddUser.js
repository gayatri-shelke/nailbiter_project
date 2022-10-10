

import axios from 'axios'
import React,{useState,useEffect} from 'react'

function AddUser() {
    const [data,setData]=useState([{}])
   
    useEffect(() => {
        getUser();
        console.log(data);
        
    }, [])
    const getUser=async()=>{
      await axios.get('http://localhost:4000/posts')
      .then((res)=>setData(res.data))
   }
    
    const [formData,setformData]=useState({FirstName:'',LastName:'',Email:'',Password:'',Gender:'',Phone_Number:''})
   
    const handleEvent= async()=>{
        let response=await axios.post('http://localhost:4000/posts',formData)
        if(response){
            alert('data submit')
        }
        else{
            alert('someting wrong')
        }
        setformData({FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        Gender:'',
        Phone_Number:''
    })
    }

        const handleDelete=async(id)=>{
          await axios.delete('http://localhost:4000/posts/'+id)
          .then((res)=>alert('delete success'))
          getUser()
      }
       
  return (

<div>
     <div className='container'>
       <div className='row'>
       <div className='card-one'>
           <div className='col-md-7 text-center'>          
           <h1 className='Reg'>Register</h1>
          </div>
          <div class="mb-3">

           <label class="form-label">FirstName</label>
             <input type="email" className="form-control  input1" value={formData.FirstName}  
            placeholder="FirstName" onChange={(e)=>setformData({...formData,FirstName:e.target.value})}/>
        </div>
        <div class="mb-3">
            <label  class="form-label">LastName</label>
            <input class="form-control input2"  placeholder='LastName' rows="3"    value={formData.LastName} onChange={(e)=>setformData({...formData,LastName:e.target.value})}/>
        </div>
        <div class="mb-3">
            <label  class="form-label">Email</label>
            <input class="form-control input3" placeholder='Email'  rows="3"   value={formData.Email} onChange={(e)=>setformData({...formData, Email:e.target.value})}  />
        </div>
        <div class="mb-3">
            <label  class="form-label">Phone Number</label>
            <input class="form-control input4"  placeholder='Mobile Number' value={formData.Phone_Number} onChange={(e)=>setformData({...formData,Phone_Number:e.target.value})}/><br></br>
            <button className='button' onClick={handleEvent}>Submit</button>
        </div>
        </div>{" "}
        <div></div>
    </div>
    </div>





    <div className='container'>
    <div className='row'>

    <div className='second-div'>
       <h1>UserDetails</h1>
       <table class="table">
       <thead>


       <tr>
           <th >FirstName</th>
           <th>LastName</th>
          <th >Email</th>
          <th >phonenumber</th>
         </tr>
       </thead>
     <tbody>
     {data&&data.map(user=>(
        <tr>
        <th scope="row">{user.Id}</th>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.Email}</td>
        <td>{user.Password}</td>

        <td>{user.Phone_Number}</td>
        <td style={{display:'flex',justifyContent:'space-evenly'}}>
        <button className='button-one'>Edit</button>
        <button className='btn-two' onClick={()=>handleDelete(user.id)}>Delete</button>

        </td>

      </tr>
    
      
  ))}
    </tbody>
  </table>
    </div>

    </div>
    </div>


    </div>

 
  )
}

export default AddUser;




