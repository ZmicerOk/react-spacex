import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';

import FetchData from './service/FetchData';
import './style.css';
class App extends React.Component {
  fetchdata = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
  };
  componentDidMount() {
    //console.log(this.fetchdata.getCompany().then(data => console.log(data)));
    this.updateRocket();
  }

  updateRocket() {
    // console.log(this.state);

    this.fetchdata
      .getRocket()
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => {
        this.setState({ rocketFeatures }, () => {
          console.log('after', this.state);
        });
        console.log('before', this.state);
      });
  }

  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket} />
        <Features rocketFeatures = {this.state.rocketFeatures}/>
        <Footer />
      </>
    );
  }
}

export default App;
