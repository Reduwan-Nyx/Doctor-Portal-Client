import React from "react";
import { toast} from 'react-toastify';
const DoctorRow = ({ doctor, index, refetch , setDeleteingDoctor }) => {
  const { name, specialty, img, email } = doctor;


  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt='doctor'/>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={() => setDeleteingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">
        Delete
      </label>
       
      </td>
    </tr>
  );
};

export default DoctorRow;
