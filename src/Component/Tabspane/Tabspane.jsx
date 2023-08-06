import React, { useState } from 'react';
import { faPlaneUp, faTrain, faShip, faCar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flight from './Flight';
import Train from './Train';
import Ship from './Ship';
import Car from './Car';
import { airlines,ships,cars,trains } from '../../data'


const TabPane = ({setData,setTo,setFrom}) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'tab1'){
      setData(airlines)
    }
    if (tabId === 'tab2'){
      setData(trains)
    }
    if (tabId === 'tab3'){
      setData(ships)
    }
    if (tabId === 'tab4'){
      setData(cars)
    }
  };

  const tabData = [
    { id: 'tab1', label: 'Flight', content: <Flight setTo={setTo} setFrom={setFrom} />, img: faPlaneUp },
    { id: 'tab2', label: 'Trains', content: <Train setTo={setTo} setFrom={setFrom} />, img: faTrain},
    { id: 'tab3', label: 'Ship', content: <Ship setTo={setTo} setFrom={setFrom} />, img: faShip },
    { id: 'tab4', label: 'Cars', content: <Car setTo={setTo} setFrom={setFrom} />, img: faCar },
  ];

 
  return (
    <div className=" p-4 w-full">
      <div className="flex border-b w-full">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`py-4 w-[25%] px-4 cursor-pointer flex flex-col items-center justify-center border-solid border-1 border-gray ${activeTab === tab.id
              ? 'bg-[#552AC1] text-white'
                : 'bg-gray-100 hover:bg-[552AC1] '
              }`}
          >
            <FontAwesomeIcon icon={tab.img} className='icon'/>
            <h1 className='text-center mt-2'>{tab.label}</h1>
          </div>
        ))}
      </div>
      <div className="p-4">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabPane;