import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }}
        
        className='flex justify-center items-center'>
           
             <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
             </div>
             <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold mt-10'>Appointment</h3>   
                <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2> 
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae neque itaque debitis commodi, excepturi architecto provident voluptas enim ipsum hic reprehenderit eaque eum autem vero ipsam doloremque quasi tenetur maxime veniam tempora nostrum? Praesentium provident cupiditate reiciendis itaque eos?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>   
        </section>
    );
};

export default MakeAppointment;