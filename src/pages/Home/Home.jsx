import { useState } from 'react';
import { useEffect } from 'react';
import { news } from 'services/dataFetching';

const Home = () => {
  useEffect(() => {
    news();
  }, []);

  return <div>Home page comming soon</div>;
};

export default Home;
