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



function App() {
  const [weatherData, setWeatherData] = useState();

    const fetchData = async () => {
      try {
        // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
        const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fcgi-bin%2Fdata%2Fmetar.php%3Fids%3DKCDW%252CKTEB%252CKMMU%26format%3Djson%26taf%3Dtrue';
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



console.log()

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
      

              <p className='airPort_header'>{weatherData[0].icaoId} <span>{fltDecision(visib(weatherData[0].visib).props.className,clouds(weatherData[0].clouds[0].base).props.children[1].props.className )}</span></p>
              <p>{coverType(weatherData[0].clouds[0].cover)}</p>
              <p>{clouds(weatherData[0].clouds[0].base)}</p>
              <p>visibility - {visib(weatherData[0].visib)}</p>
              <p>{windConds(weatherData[0].wdir, weatherData[0].wspd, weatherData[0].wgst )}</p>   
                 {freezingLvl(weatherData[0].temp)}
{/* Type of Preci*/}

        <div>
               <p>{ident(weatherData[0].wxString)}</p>   
        </div>     
       

     
      



        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>
      </div>





      {/* KMMU */}

      <div className='airPort_2'>
        
        




     <h2>{weatherData ? (
      <pre>
          
              <p className='airPort_header'>{weatherData[2].icaoId} <span>{fltDecision(visib(weatherData[2].visib).props.className,clouds(weatherData[2].clouds[0].base).props.children[1].props.className )}</span></p>

                 {coverType(weatherData[2].clouds[0].cover)}
              <p>{clouds(weatherData[2].clouds[0].base)}</p>
             <p>visibility - {visib(weatherData[2].visib)}</p>
              <p>{windConds(weatherData[2].wdir, weatherData[2].wspd, weatherData[2].wgst )}</p>
                 {freezingLvl(weatherData[2].temp)}
          
{/* Type of Preci*/}

        <div>
          <p>{ident(weatherData[2].wxString)}</p>   
        </div> 

    





        

      </pre>
    ) : (
      <p>Loading...</p>
    )}</h2>










    
    
    
    
    
    </div>






       {/*KTEB*/} 
       <div className='airPort_2'>
        
        




        <h2>{weatherData ? (
         <pre>
             
             
   
              <p className='airPort_header'>{weatherData[1].icaoId} <span>{fltDecision(visib(weatherData[1].visib).props.className,clouds(weatherData[1].clouds[0].base).props.children[1].props.className )}</span></p>
                 
                    {coverType(weatherData[1].clouds[0].cover)}
                 <p>{clouds(weatherData[1].clouds[0].base)}</p>
                <p>visibility - {visib(weatherData[1].visib)}</p>
                 <p>{windConds(weatherData[1].wdir, weatherData[1].wspd, weatherData[1].wgst )}</p>
                    {freezingLvl(weatherData[1].temp)}
             
   {/* Type of Preci*/}
   
           <div>
             <p>{ident(weatherData[1].wxString)}</p>   
           </div> 
   
       
        {/* {rawTaf(weatherData[1].rawTaf)} */}
   
   
   
   
   
           
   
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