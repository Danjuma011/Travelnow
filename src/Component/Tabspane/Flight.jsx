import React, { useState } from 'react';
import { faPlaneUp, faTrain, faShip, faCar, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Flight({setFrom,setTo}) {
    const [details, setDetails] = useState({
        departure: "",
        arrival: "",
        departDate: "",
        arrivalDate: "",
        class: "economy",
        quantity: 1
    })
    
    
    const handleSubmit = () => {
        console.log(details)
        setTo(details.arrival)
        setFrom(details.departure)
    }

    return (
        <div className='w-full pt-4'>
            <h1 className='text-[20px] xl:text-[1.3vw] text-[#552AC1] mb-4'>Best Local Flight Deals For You <br /></h1>
            <div className=''>
                <label className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Depart from</label>
                <div className="input-container mt-1">
                    <FontAwesomeIcon icon={faPlaneDeparture} className=" text-[#552AC1]  mr-3" />
                    <input
                        value={details.departure}
                        onChange={(e) => setDetails({ ...details, departure: e.target.value })}
                        type="text"
                        placeholder="Lagos - All Airports, Ikeja, Nigeria"
                        className="input placeholder:text-[12px]"
                    />
                </div>
                <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Arrive at</div>
                <div className="input-container mt-1">
                    <FontAwesomeIcon icon={faPlaneArrival} className=" text-[#552AC1]  mr-3" />
                    <input
                        type="text"
                        value={details.arrival}
                        onChange={(e) => setDetails({ ...details, arrival: e.target.value })}
                        placeholder="Abuja - All Airports, Nnamdi Azikwe, Nigeria"
                        className="input placeholder:text-[12px] focus:outline-none  py-1"
                    />
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='w-[48%]'>

                        <div class="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Depart date</div>
                        <input type="date" id="dateInput" name="date" className='px-1 py-1 input-container w-full focus:outline-none mt-1' value={details.departDate} onChange={(e) => setDetails({ ...details, departDate: e.target.value })} />
                    </span>
                    <span className='w-[48%]'>
                        <div class="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] ">Arrival date</div>
                        <input type="date" id="dateInput" name="date" className='px-1 py-1 input-container w-full focus:outline-none mt-1' value={details.arrivalDate} onChange={(e) => setDetails({ ...details, arrivalDate: e.target.value })} />
                    </span>

                </div>
                <div className='flex justify-between mt-4'>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Class</div>
                        <select className="w-full py-2 px-3 border rounded-lg focus:outline-none mt-1" id="class" name="class" value={details.class} onChange={(e) => setDetails({ ...details, class: e.target.value })}>
                            <option value="economy">Economy</option>
                            <option value="oceanview">First-Class</option>
                        </select>
                    </span>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">passengers</div>
                        <input
                            class="w-full py-2 px-3 border rounded-lg mt-1 focus:outline-none mt-1"
                            placeholder='0'
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="0"
                            max="100"
                            step="1"
                            value={details.quantity}
                            onChange={(e) => setDetails({ ...details, quantity: e.target.value })}
                        />
                    </span>
                </div>
                <button disabled={details.departure === "" || details.arrival === "" || details.departDate === "" || details.arrivalDate === "" || details.class === "" || details.quantity === 0} className='btn bg-[#552AC1] disabled:bg-[#552AC14D]' onClick={handleSubmit}>FIND FLIGHT</button>
            </div>
        </div>
    )
}

export default Flight
