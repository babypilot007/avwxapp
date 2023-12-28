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
// import rawTaf from './rawTaf';
import fltDecision from './fltDecision';
// import dayjs from 'dayjs';



function App() {

  const [weatherData, setWeatherData] = useState('');

    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
        const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fcgi-bin%2Fdata%2Fmetar.php%3Fids%3DKCDW%252CKTEB%252CKMMU%26format%3Djson%26taf%3Dtrue';
        const response = await fetch( apiUrl);
        var data = await response.json();
        setWeatherData(data);

        
        return data

        

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



if(weatherData !== null){

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

                  
                {weatherData && weatherData.map((station)=>{

                  return (

                    <div className='airPort_1'>
                        
                        <p className='airPort_header'>{station.icaoId} <span>{fltDecision(visib(station.visib).props.className,clouds(station.clouds[0].base).props.children[1].props.className )}</span></p>
                          <p>{coverType(station.clouds[0].cover)}</p>
                          <p>{clouds(station.clouds[0].base)}</p>
                          <p>{visib(station.visib)}</p>
                          <p>{windConds(station.wdir, station.wspd, station.wgst )}</p>   
                          <p>{freezingLvl(station.temp)}</p>
                          <p>{ident(station.wxString)}</p>   

                  </div>
                  )
                  })
                  
                  }
                  
              
              
  
  
  
             
  
  
  
  
  
             
  
  
  
  
  
                 
             
  
                  
              </div>
              <Footer>
                </Footer>
              
              </div>
  );
  
  }else return <div className='App_not'>Site Unavailable</div>
  }




export default App;