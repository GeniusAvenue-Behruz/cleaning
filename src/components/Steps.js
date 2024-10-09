import React from 'react'
import Step from './Step.js'

const Steps = () => {
    const stepsData = [
        { stepNumber: 'STEP 1', description: 'Pickup', imgSrc: 'location.svg' },
        { stepNumber: 'STEP 2', description: 'Wash & Dry', imgSrc: 'wash.svg' },
        { stepNumber: 'STEP 3', description: 'Fold', imgSrc: 'fold.svg' },
        { stepNumber: 'STEP 4', description: 'Delivery', imgSrc: 'delivery.svg' },
    ];

    return (
        <div style={{ backgroundColor: '#D0F6FF', padding: '20px', height: '600px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <div className='steps__header' style={{ marginTop: '-130px' }}>
                    <h3 style={{ color: '#21B7E2', textTransform: 'uppercase', fontFamily: 'Grandstander', fontWeight: '400', fontSize: '24px' }}>
                        how it works
                    </h3>
                    <h1 style={{ color: '#263238', fontSize: '60px', fontFamily: 'Outfit', fontWeight: '500' }}>Get it done in 4 steps</h1>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', justifyItems: 'center' }}>
                    {stepsData.map((step, index) => (
                        <Step
                            key={index}
                            stepNumber={step.stepNumber}
                            description={step.description}
                            imgSrc={step.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps
