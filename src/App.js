import React, { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Using CORS Anywhere
        const apiUrl = 'https://aviationweather.gov/api/data/metar?ids=Kcdw&format=json';
        const response = await fetch(proxyUrl + apiUrl);
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
      <h1>{weatherData ? (
        <pre>{weatherData[0].icaoId}</pre>
      ) : (
        <p>Loading...</p>
      )}</h1>
      
      <h2>{weatherData ? (
        <pre>
                   Sky - {weatherData[0].clouds[0].cover} 
          <br></br>visibility -  {weatherData[0].visib}
        </pre>
      ) : (
        <p>Loading...</p>
      )}</h2>

      {weatherData ? (
        <pre>{weatherData[0].clouds[0].base}</pre>
      ) : (
        <p>Loading...</p>
      )}




    </div>
  );
}

export default App;