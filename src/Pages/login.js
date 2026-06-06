import { Link } from 'react-router-dom';
import msg from './msg.jfif';
import {toast} from 'react-toastify';
import {useState} from'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(){
 const[user,setUser]=useState({username:'',password:''});
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
//user list
const response = await axios('https://travel-booking-clone-backend.onrender.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});

const data = await response.json();

if (response.ok) {
  toast.success('Login successfully');
  setUser({ username: '', password: '' });
  navigate('/home');
} else {
  toast.error(data.message || 'Invalid credentials');
}
};
    return(
<div className='login' style={{display:'flex',alignItems:'stretch',minHeight:'100vh',justifyContent: 'center',gap:'20px', padding: 'clamp(10px, 2vw, 24px)'}}>
<div className='cover'>
<img src={msg} alt='logo'/>
</div>
<div  className='flu' style={{width:'80%'}}>
<h4>Log in</h4>
<input type='text' name='username' value={user.username} onChange={handleChange} placeholder="Username" style={{marginTop:'12px',width:'368px',padding:'4px'}}/>
<br/>
<input type='password' name='password' placeholder="password" value={user.password} onChange={handleChange}style={{marginTop:'12px',width:'368px',padding:'4px'}}/>
<br/>
<button className='btn btn-dark'style={{marginTop:'20px'}} onClick={handlesubmit}>Login</button>
<br/>
<span style={{display:'inline-block',marginTop:'10px'}}>Don't have an account? or</span><Link to='/'style={{paddingLeft:'5px',whiteSpace:'nowrap'}}>Signup here</Link>
</div>
    </div>
    )
}
export default Login;
