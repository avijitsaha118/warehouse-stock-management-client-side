import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import SelectedItem from '../SelectedItem/SelectedItem';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SelectedItem></SelectedItem>
            <ContactUs></ContactUs>
            <Services></Services>
        </>
    );
};

export default Home;