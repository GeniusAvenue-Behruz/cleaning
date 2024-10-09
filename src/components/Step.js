import React from 'react'

const Step = ({ stepNumber, description, imgSrc }) => {
    return (
        <div style={{ backgroundColor: 'white', width: 'auto', height: '320px', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
            <span style={{ color: '#21B7E2', fontSize: '22px' }}>{stepNumber}</span>
            <p style={{ fontSize: '30px', fontFamily: 'Outfit', fontWeight: '500', marginBottom: '0' }}>{description}</p>
            <img src={imgSrc} alt={`${description} Icon`} />
        </div>
    );
};

export default Step