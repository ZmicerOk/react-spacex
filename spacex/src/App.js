import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features  from './components/Features/Features';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Features/>
    </React.Fragment>
  );
}

export default App;
