import './App.css';
import { useEffect } from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Tabspane from './Component/Tabspane/Tabspane'
import logo from "./Assets/logo5.png"
import Results from './Component/SearchResults/Results';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { airlines, ships, cars, trains } from './data'


function App() {
  const [data, setData] = useState(airlines);
  const [search, setSearch] = useState(airlines);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sorter, setSorter] = useState("cheapest");

  const filterData = () => {
    if (from !== "" && to !== "") {
      const filteredData = data.filter((datum) => {
        return datum.takeOff.toLowerCase() === from.toLowerCase() && datum.landing.toLowerCase() === to.toLowerCase();
      });
      console.log(filteredData)
      setSearch(filteredData);
    } else {
      setSearch(data);
    }
  }

  const sort = () => {
    if (sorter === "recommended") {
      const sortedData = search.sort((a, b) => a.price - b.price);
      setSearch(sortedData);
      setData(sortedData);
    } else {
      const sortedData = search.sort((a, b) => b.price - a.price);
      setSearch(sortedData);
      setData(sortedData)
    }
    setData(prev=>prev)
  }

  useEffect(() => {
    filterData();
  }, [from, to])
  

  useEffect(() => {
    sort(sorter)
  },[sorter])

  return (
    <div className='flex flex-col lg:flex-row bg-w-full h-screen'>
      <div className='bg-[#FFF] lg:h-full lg:w-[40%]'>
        <div>
          <img src={logo} className='w-[120px]' />
        </div>
        <div className='mt-3'>
          <Tabspane setData={setData} setTo={setTo} setFrom={setFrom} />
        </div>
      </div>
      <div className='bg-[#FAFBFA] flex-1 lg:px-7'>
        <div className='py-5'>
          <div className='flex justify-between'>
            <h1 className='text-[#7B84A8] text-xl'>Search results</h1>
            <div className='space-x-3 '>
              <div className='space-y-3 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row'>
                <button
                  className='px-4 py-2 text-sm rounded-full bg-[#552AC1] text-[#FFF]'
                  onClick={() => setSorter('cheapest')}
                >
                  CHEAPEST
                </button>
                <button
                  className='px-4 py-2 text-sm rounded-full bg-[#552AC1] text-[#FFF]'
                  onClick={() => setSorter('recommended')}
                >
                  RECOMMENDED
                </button>
              </div>
              </div>
          </div>
          {from !== "" && to !== "" && (
            <>
              <p className='text-sm text-[#7B84A8]' >we found <span className='text-[#552AC1] font-bold'>{search.length}</span> results</p>
              <div className='py-2 text-[#552AC1]'>
                <span className='font-bold'>{from}</span>
                <FontAwesomeIcon icon={faArrowRight} className='mx-4 text-[#7B84A8]' />
                <span className='font-bold'>{to}</span>
              </div>
            </>
          )}
        </div>
        {from !== "" && to !== "" ? (
          <div className='max-h-[80vh] overflow-y-scroll gap-2 bg-[#E8EEF8]'>
            {search.map((datum, index) => {
              return (
                <span className='' key={index}>
                  <Results logo={datum.logo} departTime={datum.departureTime} departDate={datum.departureDate} arriveDate={datum.arrivalDate} arriveTime={datum.arrivalTime} price={datum.price} />
                </span>
              )
            })}
          </div>
        ) : (
          <div className='flex justify-center items-center h-[80%] font-bold text-2xl text-[#552AC1]'>
            Welcome! Where would you like to go?
          </div>
        )}
      </div>
    </div>


  );
}

export default App;
