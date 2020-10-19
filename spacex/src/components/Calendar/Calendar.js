import React from 'react';
import Main from '../Main/Main';
import { useLaunches } from '../useLaunches/useLaunches';

import './calendar.css';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const { data } = useLaunches();
  return (
    <>
      <Main title="Календарь SpaceX" />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {data.map((el) => {
              return (
                <li className="calendar-item" key={el.id}>
                  <article className="launches">
                    <div className="launches-image">
                      <img src={el.links.patch.small} alt={el.name} />
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{el.name}</h2>
                      <Link
                        to={`/details/${el.name.replace(/\s */g, '_')}`}
                        className="button launches-details">
                        Подробнее
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Calendar;
