import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

const Features = ({ rocketFeatures }) => {
  console.log(rocketFeatures);

  //const height = rocketFeatures['height'];
  // for (let key in rocketFeatures) {
  //   const rocketName = rocketFeatures['name'],
  //     height = rocketFeatures['height'],
  //     diameter = rocketFeatures['diameter'],
  //     mass = rocketFeatures['mass'],
  //     payload = rocketFeatures['payload_weights'][0]['kg'],
  //     description = rocketFeatures['description'];
  //   console.log(rocketName, height['meters'], diameter['feet'], mass, payload, description);
  // }

  const keyValue = (paramKey, children) => {
    for (let key in rocketFeatures) {
      if (key === paramKey) {
        console.log(key, rocketFeatures[key], children);
        if (children) {
          return rocketFeatures[key][children];
        } else {
          return rocketFeatures[key];
        }
      }
    }
  };

  // const extractValue = ({ rocketName, height, diameter, mass, payload, description }) => {
  //   for (let key in rocketFeatures) {
  //     rocketName = rocketFeatures['name'];
  //       height = rocketFeatures['height'];
  //       diameter = rocketFeatures['diameter'];
  //       mass = rocketFeatures['mass'];
  //       payload = rocketFeatures['payload_weights'][0]['kg'];
  //       description = rocketFeatures['description'];
  //     console.log(rocketName, height['meters'], diameter['feet'], mass, payload, description);
  //     return ({ rocketName, height, diameter, mass, payload, description });
  //   }
  // };

  // extractValue();
  //console.log(typeOf rocketFeatures) ;
  //let diameter = rocketFeatures.diameter;
  return (
    <section className="features">
      <h2 className="features-title">
        {keyValue('name', false)} <br />
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
              {/* <td className="table-column">{(keyValue('payload_weights', 'kg'))['kg']} kg / 992 lb</td> */}
            </tr>
          </thead>
        </table>
        <RellaxWrapper speed={14}>
          <img src="img/falcon-1.png" alt="rocket" className="rocket" />
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
