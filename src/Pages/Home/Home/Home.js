import React from 'react';
import PatientsReview from '../../PatientsReview/PatientsReview';
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
        </div>
    );
};

export default Home;