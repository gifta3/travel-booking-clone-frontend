import {useRef} from 'react';
import banner from './banner.jpeg';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import './home.css';
import dragdrop from './dragdrop.png';

function Home() {
    const fileRef=useRef(null);
    const navigate=useNavigate();
//img click
    const handleClick=()=>{
      fileRef.current.click();
    };
    //file upload
   const handleFile = async (e) => {
  try {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('token');
    await axios.post(
      'https://travel-booking-clone-backend.onrender.com/api/upload',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success('Uploaded! Generating your itinerary...');
    setTimeout(()=>{
    navigate('/history');
    },1500);
  } catch (error) {
    console.error(error);
    toast.error('Upload failed');
  }
};
    return(
<div className='coverpage'>
<div className="banner">
<img src={banner} alt='banner'/>
</div>
 
<div className='file_upload'>
<div className="drag-drop">
<img className='preview' src={dragdrop} alt='Upload here' onClick={handleClick}/>
</div>
<input type='file' className='file' ref={fileRef} onChange={handleFile}/>
</div>
 
 <div className='footer'>
     <Link to='/home' className="nav-link" >Home</Link> 
    <Link to='/history' className="nav-link" >History</Link> 
    <Link to='/login'className="nav-link">Logout</Link>
 </div>
</div>
    );
};
export default Home;