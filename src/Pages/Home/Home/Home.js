import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BlogBanner from '../BlogBanner/BlogBanner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <BlogBanner/>
            <AppointmentBanner />
            <Doctors/>
        </div>
    );
};

export default Home;