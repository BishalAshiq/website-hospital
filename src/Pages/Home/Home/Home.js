import React from 'react';
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
        </div>
    );
};

export default Home;