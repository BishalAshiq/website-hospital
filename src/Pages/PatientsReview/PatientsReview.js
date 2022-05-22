import { Container } from '@mui/system';
import React from 'react';
import './PatientsReview.css';
import patients1 from '../../Images/Reviews/people-1.png';
import patients2 from '../../Images/Reviews/people-2.png';
import patients3 from '../../Images/Reviews/people-3.png';

const PatientsReview = () => {
    return (
        <div>
            <h1>Our Patients Says</h1>
            <Container>
                <div>
                    <div>
                        <img src={patients1} alt=""/>
                        <h2>Joe Billah</h2>
                        <p></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PatientsReview;