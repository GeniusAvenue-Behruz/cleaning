import React from 'react'

const Steps = () => {
    return (
        <div style={{ backgroundColor: '#D0F6FF', padding: '20px', height: '600px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <div className='steps__header' style={{marginTop: '-130px'}}>
                    <h3 style={{ color: '#21B7E2', textTransform: 'uppercase',fontFamily:'Grandstander', fontWeight: '400', fontSize: '24px' }}>how it works</h3>
                    <h1 style={{ color: '#263238', fontSize: '60px', fontFamily: 'Outfit', fontWeight: '500' }}>Get it done in 4 steps</h1>

                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', justifyItems: 'center' }}>
                    <div style={{ backgroundColor: 'white', width: '220px', height: '320px', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
                        <span style={{ color: '#21B7E2', fontSize: '22px' }}>STEP 1</span>
                        <p style={{ fontSize: '30px', fontFamily: 'Outfit', fontWeight: '500', marginBottom: '0' }}>Pickup</p>
                        <img src='location.svg' alt='Location Icon' />
                    </div>
                    <div style={{ backgroundColor: 'white', width: '220px', height: '320px', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
                        <span style={{ color: '#21B7E2', fontSize: '22px' }}>STEP 2</span>
                        <p style={{ fontSize: '30px', fontFamily: 'Outfit', fontWeight: '500', marginBottom: '0' }}>Wash & Dry</p>
                        <img src='wash.svg' alt='Location Icon' />
                    </div>
                    <div style={{ backgroundColor: 'white', width: '220px', height: '320px', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
                        <span style={{ color: '#21B7E2', fontSize: '22px' }}>STEP 3</span>
                        <p style={{ fontSize: '30px', fontFamily: 'Outfit', fontWeight: '500', marginBottom: '0' }}>Fold</p>
                        <img src='fold.svg' alt='Location Icon' />
                    </div>
                    <div style={{ backgroundColor: 'white', width: '220px', height: '320px', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
                        <span style={{ color: '#21B7E2', fontSize: '22px' }}>STEP 4</span>
                        <p style={{ fontSize: '30px', fontFamily: 'Outfit', fontWeight: '500', marginBottom: '0' }}>Delivery</p>
                        <img style={{ width: '90%' }} src='delivery.svg' alt='Location Icon' />
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Steps
