import React, { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://aviationweather.gov/api/data/metar?ids=Kcdw&format=json';
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
      <h1>{weatherData ? (
        <pre>{weatherData[0].name}</pre>
      ) : (
        <p>Loading...</p>
      )}</h1>
      
      {weatherData ? (
        <pre>{weatherData[0].clouds[0].base}</pre>
      ) : (
        <p>Loading...</p>
      )}




    </div>
  );
}

export default App;