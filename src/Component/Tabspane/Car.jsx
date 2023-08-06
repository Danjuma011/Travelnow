import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCar} from '@fortawesome/free-solid-svg-icons';

function Car({setTo, setFrom}) {
    const [details, setDetails] = useState({
        departure: "",
        arrival: "",
        pickUpDate: "",
        pickUpTime: "",
        quantity: 1,
        carType: "compact",
    })
    
    
    const handleSubmit = () => {
        console.log(details)
        setTo(details.arrival)
        setFrom(details.departure)
    }
  return (
      <div className='w-full p-4'>
          <h1 className='text-[20px] xl:text-[1.3vw] text-[#552AC1] mb-4'>Best local Car Rental Deals For You <br /></h1>
          <div className=''>

              <label className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Pickup Location</label>
              <div className="input-container mt-1">
                  <FontAwesomeIcon icon={faCar} className="text-[#552AC1]" />
                  <input
                  value={details.departure}
                  onChange={(e) => setDetails({...details, departure: e.target.value})}
                      type="text"
                      placeholder="Enter pickup location"
                      className="input placeholder:text-[12px]"
                  />
              </div>
              <label className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500] mt-4">Arrive at </label>
              <div className="input-container mt-1">
                  <FontAwesomeIcon icon={faCar} className="text-[#552AC1]" />
                  <input
                  value={details.arrival}
                  onChange={(e) => setDetails({...details, arrival: e.target.value})}
                      type="text"
                      placeholder="Enter pickup location"
                      className="input placeholder:text-[12px]"
                  />
              </div>
              
              <div className='flex justify-between mt-4'>
                  <span className='w-[48%]'>
                      <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Pickup Date</div>
                      <input type="date" id="carPickupDate" name="date" className='px-1 py-1 input-container w-full focus:outline-none mt-1'  value={details.pickUpDate} onChange={(e) => setDetails({...details, pickUpDate: e.target.value})}/>
                  </span>
                  <span className='w-[48%]'>
                      <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Pickup Time</div>
                      <input type="time" id="carPickupTime" name="time" className='px-1 py-1 input-container w-full focus:outline-none mt-1'  value={details.pickUpTime} onChange={(e) => setDetails({...details, pickUpTime: e.target.value})}/>
                  </span>
              </div>
              <div className='flex justify-between mt-4'>
                  <span className='w-[48%]'>
                      <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Car Type</div>
                      <select className="w-full py-2 px-3 border rounded-lg focus:outline-none mt-1" id="carType" name="carType" value={details.carType} onChange={(e) => setDetails({...details, carType: e.target.value})}>
                          <option value="compact">Compact</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="luxury">Luxury</option>
                      </select>
                  </span>
                  <span className='w-[48%]'>
                      <div className="text-[#552AC1] text-[12px] xl:text-[0.83vw] font-[500]">Passengers</div>
                      <input
                          className="w-full py-2 px-3 border rounded-lg mt-1 focus:outline-none mt-1"
                          placeholder='1'
                          type="number"
                          id="carPassengers"
                          name="carPassengers"
                          min="1"
                          max="10"
                          step="1"
                          value={details.quantity}
                          onChange={(e) => setDetails({...details, quantity: e.target.value})}
                      />
                  </span>
              </div>
              <button className='btn bg-[#552AC1] disabled:opacity-50'  disabled={details.departure === "" || details.arrival === "" || details.pickUpDate === ""   || details.pickUpTime === "" || details.quantity === 0} onClick={handleSubmit}>FIND CAR</button>
          </div>
      </div>

  )
}

export default Car