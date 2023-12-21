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
  const [weatherData, setWeatherData] = useState();

    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
        const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fcgi-bin%2Fdata%2Fmetar.php%3Fids%3DKCDW%252CKTEB%252CKMMU%26format%3Djson%26taf%3Dtrue%26hours%3D4';
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

              <p className='airPort_header'>{weatherData[0].icaoId} <span>{fltDecision(visib(weatherData[0].visib).props.className, clouds(weatherData[0].clouds[0].base).props.children[1].props.className)}</span></p>
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
          
          

              
              <p className='airPort_header'>{weatherData[4].icaoId}<span> {fltDecision(visib(weatherData[4].visib).props.className, clouds(weatherData[1].clouds[0].base).props.children[1].props.className)}</span></p>
                 {coverType(weatherData[4].clouds[0].cover)}
              <p>{clouds(weatherData[4].clouds[0].base)}</p>
             <p>visibility - {visib(weatherData[4].visib)}</p>
              <p>{windConds(weatherData[4].wdir, weatherData[4].wspd, weatherData[4].wgst )}</p>
                 {freezingLvl(weatherData[4].temp)}
          
{/* Type of Preci*/}

        <div>
          <p className='prectype'>{ident(weatherData[4].wxString)}</p>   
        </div> 

    
        {rawTaf(weatherData[4].rawTaf)}





        

      </pre>
    ) : (
      <p>Loading...</p>
    )}</h2>










    
    
    
    
    
    </div>






       {/*KMMU*/} 
       <div className='airPort_2'>
        
        




        <h2>{weatherData ? (
         <pre>
             
             
   
                 
                 <p className='airPort_header'>{weatherData[8].icaoId}<span> </span></p>
                    {coverType(weatherData[8].clouds[0].cover)}
                 <p>{clouds(weatherData[8].clouds[0].base)}</p>
                <p>visibility - {visib(weatherData[8].visib)}</p>
                 <p>{windConds(weatherData[8].wdir, weatherData[8].wspd, weatherData[8].wgst )}</p>
                    {freezingLvl(weatherData[8].temp)}
             
   {/* Type of Preci*/}
   
           <div>
             <p className='prectype'>{ident(weatherData[8].wxString)}</p>   
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