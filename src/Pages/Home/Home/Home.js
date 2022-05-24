import React from 'react';
import Contacts from '../../Contacts/Contacts';
import PatientsReview from '../../Home/PatientsReview/PatientsReview';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import ExtraTemp from '../ExtraTemp/ExtraTemp';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <ExtraTemp></ExtraTemp>
            <PatientsReview></PatientsReview>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;