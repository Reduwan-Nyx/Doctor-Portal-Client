import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect( ()=> {
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
              method: 'GET',
              headers: {
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res =>  {
          if(res.status === 401 || res.status === 403){
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/')
          }   
          return res.json()})
        .then(data => setAppointments(data))
        }
    },[user])

 
    return (
        <div>
            <h2 className='font-bold text-xl font-mono text-orange-500 mb-2 '>My Appointment: {appointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>treatment</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a, index) => <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td> 
                <td>{a.treatment}</td>
                <td>
                  
                  {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                  {(a.price && a.paid) && <span className='btn btn-xs btn-success'>Paid</span>}
                  
                  </td>
              </tr>)
        }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyAppointment;