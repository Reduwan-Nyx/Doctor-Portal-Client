import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import {GrUserAdmin} from 'react-icons/gr'
import {BsClockHistory} from 'react-icons/bs'
import {MdReviews} from 'react-icons/md'
import {GiPlagueDoctorProfile} from 'react-icons/gi'
import {FcPortraitMode} from 'react-icons/fc'
import {FcSettings} from 'react-icons/fc'


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl text-mono text-purple-500 font-bold">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appointments <span><GiPlagueDoctorProfile></GiPlagueDoctorProfile></span></Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews <span><MdReviews></MdReviews></span></Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History <span><BsClockHistory></BsClockHistory></span></Link>
          </li>
         { admin && <>
          <li>
            <Link to="/dashboard/users">All Users <h3><GrUserAdmin></GrUserAdmin></h3></Link>
          </li>
           <li>
            <Link to="/dashboard/addDoctor">Add Doctor <span><FcPortraitMode></FcPortraitMode></span></Link>
          </li>
          <li>
            <Link to="/dashboard/manageDoctor">Mange Doctor <span><FcSettings></FcSettings></span></Link>
          </li>
         </>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
