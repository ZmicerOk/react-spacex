import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';
const image = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  Starship: 'starship',
};

const Features = ({ rocketFeatures }) => {
  const keyValue = (paramKey, children) => {
    for (let key in rocketFeatures) {
      if (key === paramKey) {
        if (children) {
          return rocketFeatures[key][children];
        } else {
          return rocketFeatures[key];
        }
      }
    }
  };

  const getPaylaoad = (measure) => {
    for (const key in rocketFeatures) {
      if (key === 'payload_weights') {
        const data = rocketFeatures[key];
        const leoData = data.filter((el) => el.id === 'leo');
        for (const param in leoData[0]) {
          if (param === measure) {
            return leoData[0][measure];
          }
        }
      }
    }
  };

  return (
    <section className="features">
      <h2 className="features-title">
        {keyValue('name')} <br />
        Overview
      </h2>
      <div className="overview">
        <table className="table">
          <caption className="table-title">Size</caption>
          <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className="table-column">
                {' '}
                {keyValue('height', 'meters')} m / {keyValue('height', 'feet')} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className="table-column">
                {keyValue('diameter', 'meters')} m / {keyValue('diameter', 'feet')} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className="table-column">
                {keyValue('mass', 'kg')} kg / {keyValue('mass', 'lb')} lb
              </td>
            </tr>
            <tr>
              <td className="table-column">PAYLOAD TO LEO</td>
              <td className="table-column">
                {getPaylaoad('kg')} kg / {getPaylaoad('lb')} lb
              </td>
            </tr>
          </thead>
        </table>
        <RellaxWrapper speed={14}>
          <img src={`img/${image[keyValue('name')]}.png`} alt="rocket" className="rocket" />
        </RellaxWrapper>
        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">{keyValue('description')}</p>
        </article>
      </div>
    </section>
  );
};

export default Features;
