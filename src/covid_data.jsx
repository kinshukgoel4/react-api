import React, { useState, useEffect } from 'react';
import './styles/style.css';
import Card from './Components/Card';


function CovidData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const json = await response.json();
      setData(json.data.regional);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((region) => (
        <Card
          key={region.loc}
          region={region.loc}
          confirmedCases={region.totalConfirmed}
          recoveredCases={region.discharged}
          deaths={region.deaths}
        />
      ))}
    </div>
  );
}

export default CovidData;
