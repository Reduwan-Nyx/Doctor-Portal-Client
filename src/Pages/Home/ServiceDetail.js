import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import treatment from '../../assets/images/treatment.png'
const ServiceDetail = () => {
    return (
        <section className='flex justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-5 py-28'>
             <div className='flex-1'>
                <img style={{width:'458px', height: '576px'}} src={treatment} alt="" />
            </div>
            <div className='flex-1'>
                <h2  className='text-3xl font-bold my-4'>Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className=' mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default ServiceDetail;