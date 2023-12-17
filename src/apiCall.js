import React, { useEffect, useState } from 'react';



const [weatherData, setWeatherData] = useState(null);

export default fetchData = async () => {
  try {
    // const proxyUrl = 'https://corsproxy.org/?'; // Using CORS Anywhere
    const apiUrl = 'https://corsproxy.org/?https%3A%2F%2Faviationweather.gov%2Fapi%2Fdata%2Fmetar%3Fids%3DKCDW%252CKTEB%26format%3Djson%26taf%3Dtrue';
    const response = await fetch( apiUrl);
    var data = await response.json();
    setWeatherData(data);
    
    console.log(data)
    // console.log(data[1].rawTaf.split("FM"))

  } catch (error) {
    console.error(error);
  }
}

return fetchData