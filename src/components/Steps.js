import React from 'react'

const Steps = () => {
    return (
        <div className='bg-[#D0F6FF] '>
            <div className='container mx-auto  flex flex-col justify-center items-center'>
                <h3 className='text-[#21B7E2] uppercase text-2xl'>how it works</h3>
                <h1 className='text-[#263238] text-[60px] font-inter font-medium'>Get it done in 4 steps</h1>
                <div className='flex justify-center items-center gap-[50px]'>
                    <div className=' item flex flex-col items-center bg-white w-[220px] h-[320px] rounded-[20px] p-5'>
                        <span className='text-[#21B7E2]'>STEP 1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
