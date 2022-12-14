import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import Reviews from './Pages/Home/Reviews';



function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path="appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>} /> 
        {/* dashboard */}
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreviews' element={<MyReview></MyReview>}></Route> 
         
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route> 
          <Route path='addDoctor' element={<RequireAdmin>
           <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin>
           <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>

        </Route>
        
        {/* login */}
         <Route path="login" element={<Login></Login>} />
         {/* signup */}
         <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
