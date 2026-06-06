import './App.css';
import './Pages/register.css';
import './Pages/home.css';
import './Pages/history.css';
import{Routes,Route, BrowserRouter} from'react-router-dom';
import Login from './Pages/login';
import Register from './Pages/register';
import Home from './Pages/home';
import History from './Pages/history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
       <BrowserRouter>
                   <ToastContainer position='top-right'/>
    <Routes>
        <Route path='/'element={<Register/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/history'element={<History/>}/>
        <Route path='/login'element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
