// import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Ship({ setTo, setFrom }) {
    const [details, setDetails] = useState({
        departure: "",
        arrival: "",
        departDate: "",
        cabinType: "inside",
        adults: "1",
        children: ""
    })


    const handleSubmit = () => {
        console.log(details) 
        setTo(details.arrival)
        setFrom(details.departure)
    }
    return (
        <div className='w-full pt-4'>
            <h1 className='text-[20px] xl:text-[1.3vw] text-[#552AC1] mb-4'>Best Cruise Deals For You</h1>
            <div className=''>
                <label className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Depart from</label>
                <div className="input-container mt-1">
                    <FontAwesomeIcon icon={faShip} className="text-[#552AC1]  mr-3" />
                    <input
                        value={details.departure}
                        onChange={(e) => setDetails({ ...details, departure: e.target.value })}
                        type="text"
                        placeholder="Miami, Florida, USA"
                        className="input placeholder:text-[12px]"
                    />
                </div>
                <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Destination</div>
                <div className="input-container mt-1">
                    <FontAwesomeIcon icon={faShip} className="text-[#552AC1]  mr-3" />
                    <input
                        value={details.arrival}
                        onChange={(e) => setDetails({ ...details, arrival: e.target.value })}
                        type="text"
                        placeholder="Nassau, Bahamas"
                        className="input placeholder:text-[12px] focus:outline-none py-1"
                    />
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Departure date</div>
                        <input
                            value={details.departDate}
                            onChange={(e) => setDetails({ ...details, departDate: e.target.value })}
                            type="date" id="shipDepartDate" name="date" className='px-1 py-1 input-container w-full focus:outline-none mt-1' />
                    </span>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Cabin Type</div>
                        <select className="w-full py-2 px-3 border rounded-lg focus:outline-none mt-1" id="shipCabinType" name="shipCabinType" value={details.cabinType} onChange={(e) => setDetails({ ...details, cabinType: e.target.value })}>
                            <option value="inside">Inside</option>
                            <option value="oceanview">Oceanview</option>
                            <option value="balcony">Balcony</option>
                            <option value="suite">Suite</option>
                        </select>
                    </span>
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Adults</div>
                        <input
                            value={details.adults}
                            onChange={(e) => setDetails({ ...details, adults: e.target.value })}
                            className="w-full py-2 px-3 border rounded-lg mt-1 focus:outline-none mt-1"
                            placeholder='1'
                            type="number"
                            id="shipAdults"
                            name="shipAdults"
                            min="1"
                            max="10"
                            step="1"
                        />
                    </span>
                    <span className='w-[48%]'>
                        <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Children</div>
                        <input
                            value={details.children}
                            onChange={(e) => setDetails({ ...details, children: e.target.value })}
                            className="w-full py-2 px-3 border rounded-lg mt-1 focus:outline-none mt-1"
                            placeholder='0'
                            type="number"
                            id="shipChildren"
                            name="shipChildren"
                            min="0"
                            max="10"
                            step="1"
                        />
                    </span>
                </div>
                <button disabled={!details.departure || !details.arrival || !details.adults } className='btn bg-[#552AC1] disabled:bg-[#552AC14D]' onClick={handleSubmit}>FIND CRUISE</button>
            </div>
        </div>

    )
}

export default Ship
