import React from 'react';
import { useState } from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor , setDeleteingDoctor] = useState(null)
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
           
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl mb-2">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            doctors.map((doctor, index) => <DoctorRow
            key={doctor._id}
            doctor={doctor}
            index={index}
            refetch={refetch}
            setDeleteingDoctor={setDeleteingDoctor}
            ></DoctorRow>)
        }
     
        </tbody>
    </table>
    </div>
    {deletingDoctor && <DeleteConfirm
    deletingDoctor={deletingDoctor}
    refetch={refetch}
    setDeleteingDoctor={setDeleteingDoctor}
    ></DeleteConfirm>}
 </div>
    );
};

export default ManageDoctors;