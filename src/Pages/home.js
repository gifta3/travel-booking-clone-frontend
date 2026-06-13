import {useRef} from 'react';
import banner from './banner.jpeg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css';
import dragdrop from './dragdrop.png';

function Home() {
    const fileRef=useRef(null);
//img click
    const handleClick=()=>{
      fileRef.current.click();
    };
    //file upload
    const handleFile=async(e)=>{
     const file= e.target.files[0];
     const formData=new FormData();
     formData.append('document',file);
     await axios.post('https://travel-booking-clone-backend.onrender.com/api/upload',formData
      //method:'POST',
      //body:formData,
     );
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