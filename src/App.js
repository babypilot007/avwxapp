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

function App() {
  const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
        const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Fmetar%3Fids%3DKCDW%252CKTEB%26format%3Djson%26taf%3Dtrue';
        const response = await fetch( apiUrl);
        var data = await response.json();
        setWeatherData(data);
        
        console.log(data)

      } catch (error) {
        console.error(error);
      }
    }


    
   
      useEffect(() => {
        fetchData()
}, [])

useEffect(() => {
  setInterval(() => {
 fetchData()
}, 900000)
})

const uSee = visib(weatherData[0].visib)
const iSe = fltDecision(uSee)


  return (

    <div className="App">
      <h2>{weatherData ? (
        <pre>
                <h3>{newtime(weatherData[0].reportTime)}</h3>
        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>



      <div className='airPort_1'>
       <h2>{weatherData ? (
        <pre>

              <p className='airPort_header'>{weatherData[0].icaoId} <span>{iSe}</span></p>
              <p>{coverType(weatherData[0].clouds[0].cover)}</p>
              <p>{clouds(weatherData[0].clouds[0].base)}</p>
              <p>visibility - {visib(weatherData[0].visib)}</p>
              <p>{windConds(weatherData[0].wdir, weatherData[0].wspd, weatherData[0].wgst )}</p>   
                 {freezingLvl(weatherData[0].temp)}
{/* Type of Preci*/}

        <div>
               <p className='prectype'>{ident(weatherData[0].wxString)}</p>   
        </div>     
       

     
      <div className ='precip'>     
            {
                (() => {
                   if((parseInt(weatherData[0].temp) - parseInt(weatherData[0].dewp)) <= 4)
                   {
                    return <p className='precip'>Chances of Precip</p>
                   }else 
                   { return <p className='noprecip'>No Precip</p>}
                })()  
            }  
        </div>



        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>
      </div>





      {/* KTEB */}

      <div className='airPort_2'>
        
        




     <h2>{weatherData ? (
      <pre>
          
          

              
              <p className='airPort_header'>{weatherData[1].icaoId}</p>
                 {coverType(weatherData[1].clouds[0].cover)}
              <p>{clouds(weatherData[1].clouds[0].base)}</p>
             <p>visibility - {visib(weatherData[1].visib)}</p>
              <p>{windConds(weatherData[1].wdir, weatherData[1].wspd, weatherData[1].wgst )}</p>
                 {freezingLvl(weatherData[0].temp)}
          
{/* Type of Preci*/}

        <div>
          <p className='prectype'>{ident(weatherData[0].wxString)}</p>   
        </div> 

    
        {rawTaf(weatherData[1].rawTaf)}

      </pre>
    ) : (
      <p>Loading...</p>
    )}</h2>






    </div>
        <Footer />
    </div>
    
  );
}


export default App;