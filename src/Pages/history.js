import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import './history.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import{useEffect,useState} from 'react';
function History(){
  const [history,setHistory]=useState([]);
  //get history
useEffect(() => {
  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://travel-booking-clone-backend.onrender.com/api/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setHistory(response.data);
    } catch (error) {
      console.error("History fetch error:", error);
    }
  };
  fetchHistory();
}, []);
console.log(history);
    return(
      <div className='parent'>
            <div className='banner-carousel'>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img1} className="d-block w-100 " alt="im1"/>
      <div className="carousel-caption ">
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} className="d-block w-100" alt="img2"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="img3"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    <div className="timeline-container">
      <h2>History</h2>

      <div className="timeline">
        {history.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className={`dot ${item.Status}`}></div>
            <div className="content">
              <h4>{item.Itinerary}</h4>
                <p>Uploaded file:{item.UploadedFile}</p>
              <p>{new Date(item.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='footer'>
     <Link to='/home' className="nav-link" >Home</Link> 
    <Link to='/history' className="nav-link" >History</Link> 
    <Link to='/login'className="nav-link">Logout</Link>
 </div>
  </div>
    )
}
export default History;
