import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const proxyUrl = 'https://corsproxy.io/?'; // Using CORS Anywhere
        const apiUrl = 'https://aviationweather.gov/api/data/metar?ids=KCDW%2CKTEB&format=json&taf=true';
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)

        if(data[0].visib === 'null'){
          var conds = 'VFR'
        }

      } catch (error) {
        console.error(error);
      }

    
    };

    

    fetchData();
  }, []);
 
 


  return (

    <div className="App">
      
      <h2>{weatherData ? (
        <pre>
            <p className ='clouds'>     
            {
                (() => {
                   if(weatherData[0].clouds[0].base === null)
                   {weatherData[0].clouds[0].base = "No Clouds"}
                   else {weatherData[0].clouds[0].base = weatherData[0].clouds[0].base +  ' AGL'}
                })()             
            }  
            </p> 

            <p className ='winds'>     
            {
                (() => {
                   if(weatherData[0].wgst === null)
                   {weatherData[0].wgst = ""}
                   else {weatherData[0].wgst ='Gust ' + weatherData[0].wgst +  ' Kts'}
                })()             
            }  
            </p> 

        <h2>{weatherData ? (
        
        <pre>{weatherData[0].icaoId}</pre>
               ) : (
             <p>Loading...</p>
           )}</h2> 

                   Sky - {weatherData[0].clouds[0].cover}    
          <br></br>clouds - {weatherData[0].clouds[0].base}        
          <br></br>visibility - {weatherData[0].visib} sm
          <br></br>Winds {weatherData[0].wdir}<span> </span>
                   at {weatherData[0].wspd} kts 
          <br></br>{weatherData[0].wgst}

      <div className ='fltconds'>     
            {
                (() => {
                    if(weatherData[0].visib ==='10+') {
                            return (
                                <p className='VFR'>VFR</p>
                            )
                        } else if (weatherData[0].visib ==='5') {
                            return (
                            <p className='MVFR'>MVFR</p>
                            )
                        } else {
                            return (
                                <p className='IFR'>IFR</p>
                            )
                        }
                })()  
            }  
        </div>  


        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>

      
      <h2>{weatherData ? (
        <pre>{weatherData[1].icaoId}
            <br></br>TAF - 

        
        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>

    <p className='footer'>A boring weather App by Himalay Jariwala</p>
    </div>
  );
}


export default App;