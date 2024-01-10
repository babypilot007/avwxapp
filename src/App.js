import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './footer';
import newtime from './time';
import ident from './ident';
import freezingLvl from './freezingLvl';
import visib from './visib';
import coverType from './coverType';
import clouds from './cloudsType';
import windConds from './windCond';
import rawTaf from './rawTaf';
import fltDecision from './fltDecision';
// import dayjs from 'dayjs';



function App() {

  const [weatherData, setWeatherData] = useState('');
  const [TafData, setTafData] = useState('');
  const [windsData, setwindsData] = useState('');

  const [showTaf, setShowTaf] = useState(false)
  const [showMetar, setShowMetar] = useState(true)
  const [showWinds, setShowWinds] = useState(false)



    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
        const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fcgi-bin%2Fdata%2Fmetar.php%3Fids%3DKCDW%252CKTEB%252CKMMU%26format%3Djson%26taf%3Dtrue';
        const taf_url = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Ftaf%3Fids%3DKTEB%26format%3Dhtml%26metar%3Dfalse';
        const winds_url = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Fwindtemp%3Fregion%3Dbos%26level%3Dlow%26fcst%3D12';
       
        const response = await fetch(apiUrl);
        var data = await response.json();
        
        const taf_response = await fetch(taf_url)
        var taf_data = await taf_response.text(taf_response);
        
        const windsAloft = await fetch(winds_url);
        var winds_data = await windsAloft.text(windsAloft);
        
        setWeatherData(data);
        setTafData(taf_data)
        setwindsData(winds_data)

        



        return [data, taf_data, winds_data]


      } catch (error) {
        console.error(error);
      }
    }



      useEffect(() => {
        fetchData()
        fltDecision()
        visib()
        clouds()
        
}, [])






useEffect(() => {
  setInterval(() => {
 fetchData()
}, 900000)
})



 

  return (
          
          <div>
              <div className="App">
  
                   <h2>{weatherData ? (
                
                <pre>              
                      <p>{newtime(weatherData[0].reportTime)}</p> 
                      
                </pre>
                ) : (
                <p>Loading...</p>
                )}</h2>

                <div className='btn_div'>
                <button className='btn' onClick={()=> 
                {setShowTaf(!showTaf);
                setShowMetar(!showMetar);
              setShowWinds(!showWinds)}
                }>
                        {showTaf ? "Metar" : "Forcast"}
                      </button>
                </div>
                              
                {weatherData && weatherData.map((station)=>{

                  return (
                      
                    <div className='airPort_1'>

                        {showMetar ? <p>
                                  
                                   <p className='airPort_header'>{station.icaoId} <span>{fltDecision(visib(station.visib).props.children[1].props.className,clouds(station.clouds[0].base).props.children[1].props.className )}</span></p>

                                    <p>{coverType(station.clouds[0].cover)}</p>
                                    <p>{clouds(station.clouds[0].base)}</p> 
                                    <p>{visib(station.visib)}</p>
                                    <p>{windConds(station.wdir, station.wspd, station.wgst )}</p>   
                                    <p>{freezingLvl(station.temp)}</p>
                                    <p>{ident(station.wxString)}</p>


                        </p>
                        :null}


                  </div>
                  )
                  })
                  }  

                    
                {

                        
                      <div>{showTaf ? <div className='taf'>{rawTaf(TafData)}</div>
                      : null}</div>
                }
                  
              </div>
                <Footer>
                </Footer>
              
              </div>
  );
  
  }




export default App;