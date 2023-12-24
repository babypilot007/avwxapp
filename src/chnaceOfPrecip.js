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