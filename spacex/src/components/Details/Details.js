import React, { useState, useEffect } from 'react';
import Main from '../Main/Main';
import { useHistory } from 'react-router-dom';
import { useLaunches } from '../useLaunches/useLaunches';
import './details.css';
import YouTube from 'react-youtube';
const Details = (props) => {
  const history = useHistory();
  const [launch, setLaunch] = useState(null);
  const { getLaunch } = useLaunches();
  useEffect(() => {
    setLaunch(getLaunch(props.match.params.name));
  }, [getLaunch, props.match.params.name]);

  // add preloader!!
  //if (!launch) return <div>loading...</div>;
  if (!launch) return null;
  return (
    <>
      <Main title={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
          </div>
          <div>
            <YouTube className="details-youtube" videoId={launch.links.youtube_id} />
          </div>
        </div>
        <button onClick={history.goBack} className="button button-back" type="button">
          go back
        </button>
      </main>
    </>
  );
};

export default Details;
