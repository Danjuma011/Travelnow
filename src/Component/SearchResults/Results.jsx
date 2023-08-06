import React from 'react'
// import data from ''

function Results({ logo, departDate, departTime, arriveDate, arriveTime, price }) {
    return (
        <div className='grid  grid-cols-4 py-5 space-x-4 justify-between m-2 items-center bg-white rounded-lg'>
            <img src={logo} className='w-[70%] ml-3' />
            <div className='grid-span-1'>
                <h1 className='text-[#2E4D6B] text-sm font-[500] text-center'>Depart</h1>
                <p className='text-[#2E4D6B] text-base font-[300] text-center '>{departDate}</p>
                <p className='text-[#0F1A24] text-base font-[300] text-center '>{departTime}</p>
            </div>
            <div className='grid-span-1' >
                <h1 className='text-[#2E4D6B] text-sm font-[500] text-center'>Arrive</h1>
                <p className='text-[#2E4D6B] text-base font-[300] text-center  '>{arriveDate}</p>
                <p className='text-[#0F1A24] text-base font-[300] text-center '>{arriveTime}</p>
            </div>
            <div className='grid-span-1'>
                <h1 className='text-[#2E4D6B] text-sm font-[500]'>price</h1>
                <p className='text-[#0F1A24]  text-lg font-[450]'>${price}</p>
            </div>
        </div>
    )
}

export default Results

const getDay = (whoseDay, time) => {
    return whoseDay
}

getDay('monday', '12:00')