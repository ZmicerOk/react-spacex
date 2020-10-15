import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import FetchData from '../../service/FetchData';
import './calendar.css';
import { Link } from 'react-router-dom';
const fetchData = new FetchData();
const Calendar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData.getLaunches().then((launches) => setData(launches));
  }, []);

  // console.log(data);
  return (
    <>
      <Main />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data.map((el) => (
              <li className="calendar-item" key={el.id}>
                <article className="launches">
                  <div className="launches-image">
                    <img src={el.links.patch.small} alt={el.name} />
                  </div>
                  <div className="launches-content">
                    <h2 className="launches-title">{el.name}</h2>
                    <Link to="/details" className="button launches-details">
                      Подробнее
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Calendar;
