import React from 'react';
import PatientsReview from '../../Home/PatientsReview/PatientsReview';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import ExtraTemp from '../ExtraTemp/ExtraTemp';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <ExtraTemp></ExtraTemp>
            <PatientsReview></PatientsReview>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;