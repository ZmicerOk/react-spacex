import React from 'react';
import Main from '../Main/Main';
import { useHistory } from 'react-router-dom';
import { useLaunches } from '../useLaunches/useLaunches';
import './details.css';
const Details = ({match}) => {
  const history = useHistory();
  const { id } = match.params;
  const { data } = useLaunches();
  const item = data.find((el) => el.id === id);
// console.dir(item);
// console.log(item.details);
if(item){
  console.log(item);
  console.log(item.details)
  return (
    <>
      <Main />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
            </div>
            <div className="details-content">
              <p className="details-description">
                {/* {item.details} */}
              </p>
            </div>
          </div>
          <div>
            <iframe
              className="details-youtube"
              title="details-youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dLQ2tZEH6G0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
        <button onClick={history.goBack} className="button button-back" type="button">
          go back
        </button>
      </main>
    </>
  );

}

};

export default Details;
