import {useState} from'react';
import msg from './msg.jfif';
import {toast} from 'react-toastify';
import{Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';
function Register (){
    const[user,setUser]=useState({name:'',email:'',password:'',username:''});
    const navigate=useNavigate();
const handleChange=(e)=>{  
const {name,value}=e.target;
setUser((prev)=>({
    ...prev,
    [name]:value
}));
};
const handlesubmit=async(e)=>{
    e.preventDefault();
try{
   const response= await axios('https://travel-booking-clone-backend.onrender.com/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
   });
   const data=await response.json();
console.log(data);
toast.success('Registered Successfully');
setUser({
    name:'',
    email:'',
    username:'',
    password:'',
});
navigate('./login')
}catch(err){
    console.log('internal error');
    toast.error('Invalid Credentials');
};
};
return(
<form onSubmit={handlesubmit}>
<div className='register-container'>
<div className='register-image' >
<img src={msg} alt='cover'/>
</div>
<div  className='register-form'>
<h4>Sign up</h4>
<input type='text' name='name' placeholder="Name" value={user.name}  onChange={handleChange} />
<br/>
<input type='email' name='email' placeholder="Email" value={user.email} onChange={handleChange} />
<br/>
<input type='text' name='username' placeholder="username" value={user.username} onChange={handleChange}/>
<br/>
<input type='password' name='password' placeholder="password" value={user.password} onChange={handleChange} />
<br></br>
<button className='btn btn-dark'>Register</button>
<br></br>
<p >Already have an account?  </p><Link to='/login'>Log in here</Link>
</div>
    </div>
</form>
);
};
export default Register;
