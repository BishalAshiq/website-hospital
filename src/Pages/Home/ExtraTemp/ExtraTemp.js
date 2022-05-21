import React from 'react';
import './ExtraTemp.css';

const ExtraTemp = () => {
    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/NFT6Nyg/extra-Temp.png")`,  
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingBottom:"230px" 
          }}>
          <div className='temp'>
            <h1>Make Your Appointment <br/> Today</h1>
            <p>People with health problems who visit the hospital for diagnosis or treatment, but do not at this time require a bed or to be admitted for overnight care.</p>
          </div>
        </div>
    );
};

export default ExtraTemp;