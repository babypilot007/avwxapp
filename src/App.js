import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './footer';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.io/?'; // Using CORS Anywhere
        const apiUrl = 'https://aviationweather.gov/api/data/metar?ids=KCDW%2CKTEB&format=json&taf=true';
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)

       

      } catch (error) {
        console.error(error);
      }

    
    };

    

    fetchData();
  }, []);
 
 


  return (

    <div className="App">
      

      <div className='METAR'>
     
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
                    if(parseInt(weatherData[0].visib) >= 10 && parseInt(weatherData[0].clouds[0].base) > 3000 ) {
                            return (
                                <p className='VFR'>I'd Fly in this weather</p>
                            )
                        } else if ((parseInt(weatherData[0].visib) <= 5 && parseInt(weatherData[0].visib) >= 3 ) || ( parseInt(weatherData[0].clouds[0].base) <= 3000 && parseInt(weatherData[0].clouds[0].base) >= 1000)) {
                            return (
                            <p className='MVFR'>I probably won't Fly</p>
                            )
                        } else if((parseInt(weatherData[0].visib) < 3 && parseInt(weatherData[0].visib) >= 1 ) || ( parseInt(weatherData[0].clouds[0].base) < 1000 && parseInt(weatherData[0].clouds[0].base) >= 500)) {
                            return (
                                <p className='IFR'>Won't fly unless I need to </p>
                            )
                        }else if((parseInt(weatherData[0].visib) < 1) || (parseInt(weatherData[0].clouds[0].base) < 500)) {
                          return (
                              <p className='LIFR'>Absolutely Won't Fly </p>
                          )
                        }else return ( <p className='clear'>Blue skies </p>)
                })()  
            }  
        </div>  

        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>

      </div>


      {/* KTEB */}
      <div className='TAF'>
     
     <h2>{weatherData ? (
      <pre>
          <p className ='clouds'>     
          {
              (() => {
                 if(weatherData[1].clouds[0].base === null)
                 {weatherData[1].clouds[0].base = "No Clouds"}
                 else {weatherData[1].clouds[0].base = weatherData[1].clouds[0].base +  ' AGL'}
              })()             
          }  
          </p> 

          <p className ='winds'>     
          {
              (() => {
                 if(weatherData[1].wgst === null)
                 {weatherData[1].wgst = ""}
                 else {weatherData[1].wgst ='Gust ' + weatherData[1].wgst +  ' Kts'}
              })()             
          }  
          </p> 

      <h2>{weatherData ? (
      
      <pre>{weatherData[1].icaoId}</pre>
             ) : (
           <p>Loading...</p>
         )}</h2> 

                 Sky - {weatherData[1].clouds[0].cover}    
        <br></br>clouds - {weatherData[1].clouds[0].base}        
        <br></br>visibility - {weatherData[1].visib} sm
        <br></br>Winds {weatherData[1].wdir}<span> </span>
                 at {weatherData[1].wspd} kts 
        <br></br>{weatherData[1].wgst}


    <div className ='fltconds'>     
          {
              (() => {
                  if(parseInt(weatherData[1].visib) >= 10 && parseInt(weatherData[1].clouds[0].base) > 3000 ) {
                          return (
                              <p className='VFR'>I'd Fly in this weather</p>
                          )
                      } else if ((parseInt(weatherData[1].visib) <= 5 && parseInt(weatherData[1].visib) >= 3 ) || ( parseInt(weatherData[1].clouds[0].base) <= 3000 && parseInt(weatherData[1].clouds[0].base) >= 1000)) {
                          return (
                          <p className='MVFR'>I probably won't Fly</p>
                          )
                      } else if((parseInt(weatherData[1].visib) < 3 && parseInt(weatherData[1].visib) >= 1 ) || ( parseInt(weatherData[1].clouds[0].base) < 1000 && parseInt(weatherData[1].clouds[0].base) >= 500)) {
                          return (
                              <p className='IFR'>Won't fly unless I need to </p>
                          )
                      }else if((parseInt(weatherData[1].visib) < 1) || (parseInt(weatherData[1].clouds[0].base) < 500)) {
                        return (
                            <p className='LIFR'>Absolutely Won't Fly </p>
                        )
                      }else return ( <p className='clear'>Blue skies </p>)
              })()  
          }  
      </div>  

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