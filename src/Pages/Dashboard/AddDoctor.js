import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast} from 'react-toastify';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imageStorageKey = '10e83300c088f076df96f1e13a3d4ea8';



  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img

            }
            // send to your database
            fetch('http://localhost:5000/doctor', {
                method: 'POST',
                headers: {
                  'content-type':  'application/json',
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted => {
             if(inserted.insertedId){
                toast.success('Doctor Added Succesfully')
                reset()
             }
             else{
                toast.error('Faild to Add Doctor')
             }
            })
        }
        console.log('image db result' ,result);
    })
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-xl">Add a New Doctor</h2>
      <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input border-orange-500 input-warning w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* email */}
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input border-orange-500 input-warning w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Porvide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* password */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text ">Specialty</span>
          </label>
          <select {...register('specialty')} class="select border-orange-500 mb-5 w-full max-w-xs font-mono">
           
           {
            services.map(service =>  <option
            key={service._id}
            value={service.name}
            >{service.name}</option>)
           }
          
          </select>
        </div>

        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-warning w-full max-w-xs"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
