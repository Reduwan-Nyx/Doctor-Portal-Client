import React from 'react';
import Banner from './Banner';
import Contract from './Contract';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ServiceDetail from './ServiceDetail';
import Services from './Services';
import Testimonials from './Testimonials';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info ></Info>
           <Services></Services>
           <ServiceDetail></ServiceDetail>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;