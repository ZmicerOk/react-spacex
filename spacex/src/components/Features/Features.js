import React from 'react';
import Main from '../Main/Main';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';
const image = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  Starship: 'starship',
};

const Features = ({ name, height, diameter, mass, payload_weights: payload, description }) => (
  <>
    <Main rocket={name} />
    <section className="features">
      <h2 className="features-title">
        {name} <br />
        Overview
      </h2>
      <div className="overview">
        <table className="table">
          <caption className="table-title">Size</caption>
          <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className="table-column">
                {height.meters} m / {height.feet} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className="table-column">
                {diameter.meters} m / {diameter.feet} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className="table-column">
                {mass.kg} kg / {mass.lb} lb
              </td>
            </tr>
            {payload.map((item) => (
              <tr key={item.id}>
                <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                <td className="table-column">
                  {item.kg} kg / {item.lb} lb
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <RellaxWrapper speed={14}>
          <img src={`img/${image[name]}.png`} alt={name} className="rocket" />
        </RellaxWrapper>
        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">{description}</p>
        </article>
      </div>
    </section>
  </>
);

export default Features;
