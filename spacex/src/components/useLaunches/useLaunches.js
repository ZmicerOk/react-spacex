import { useState, useEffect } from 'react';
import FetchData from '../../service/FetchData';
const fetchData = new FetchData();

export const useLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches().then((launches) => setData((state) => [...launches]));
  }, []);

  const getLaunch = (id) => data.find((el) => el.id === id);
  
  return { data , getLaunch};
};