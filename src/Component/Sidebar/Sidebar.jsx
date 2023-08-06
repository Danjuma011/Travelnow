import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabspane from '../Tabspane/Tabspane'
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <div className='aside'>
                <h1 className='logo'>Tickets4U</h1>
                <div className='icons-container'>
                    <Tabspane />
                </div>
                <div className='main'>
                    <h4 className=''>Best flight deals with <br /><span>Tickets4U</span> </h4>
                    <div className="depart">Depart from</div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="input-icon" />
                        <input
                            type="text"
                            placeholder="London - All Airports, England, UK"
                            className="input"
                        />
                    </div>
                    <div className="depart">Arrive at</div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faPlaneArrival} className="input-icon" />
                        <input
                            type="text"
                            placeholder="New York - All Airports, New York, USA"
                            className="input"
                        />
                    </div>

                    <div className='flex justify-between'>
                        <span>
                            <div class="depart ">Return date</div>
                            <input type="date" id="dateInput" name="date" className='px-1 py-1.5' />
                        </span>
                        <span>

                            <div class="depart">Depart date</div>
                            <input type="date" id="dateInput" name="date" className='px-1 py-1.5' />
                        </span>

                    </div>

                    <div className='flex justify-between'>
                        <span >
                            <div className="depart">Class</div>
                            <input
                                class="w-[190px] py-2 px-3 border rounded-lg"
                                placeholder='0'
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="0"
                                max="100"
                                step="1"
                            />
                        </span>
                        <span>
                            <div className="depart">passengers</div>
                            <input
                                class="w-[95px] py-2 px-3 border rounded-lg"
                                placeholder='0'
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="0"
                                max="100"
                                step="1"
                            />
                        </span>


                    </div>





                    <button className='btn'>FIND FLIGHT</button>
                </div>

            </div>

        </>
    );
}

export default Sidebar;
