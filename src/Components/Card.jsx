import React from 'react';
import '../styles/style.css';

    
function Card(props) {
  return (
    <div className="card">
      <h2>{props.region}</h2>
      <p className='confirmed'>Confirmed cases: {props.confirmedCases}</p>
      <p className='recovered'>Recovered cases: {props.recoveredCases}</p>
      <p className='deaths'>Deaths: {props.deaths}</p>
    </div>
  );
}

export default Card;
