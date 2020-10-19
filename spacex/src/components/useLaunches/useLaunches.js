import { useState, useEffect } from 'react';
import FetchData from '../../service/FetchData';
const fetchData = new FetchData();

export const useLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches().then((launches) => setData((state) => [...launches]));
  }, []);

  const getLaunch = (name) => data.find((el) => el.name === name.replace(/_ */g, ' '));
  
  return { data , getLaunch};
};
