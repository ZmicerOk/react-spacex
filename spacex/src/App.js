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
    rockets: [],
    companyLinks: {},
    summary: '',
  };

  companyInfo() {
    this.fetchdata.getCompany().then((data) => {
      for (const key in data) {
        if (key === 'links') {
          // console.log(key, data[key]);
          this.setState({ companyLinks: data[key] });
        }
        if (key === 'summary') {
          // console.log(key, data[key]);
          this.setState({ summary: data[key] });
        }
      }
    });
  }

  componentDidMount() {
    this.updateRocket();
    this.companyInfo();
  }

  updateRocket() {
    // console.log(this.state);
    this.fetchdata
      .getRocket()
      .then((data) => {
        this.setState({ rockets: data.map((el) => el.name) });
        return data;
      })
      .then((data) => data.find((item) => item.name === this.state.rocket))
      .then((rocketFeatures) => {
        this.setState({ rocketFeatures });
      });
  }

  changeRocket = (rocket) => {
    this.setState({ rocket }, this.updateRocket());
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Features rocketFeatures={this.state.rocketFeatures} />
        <Footer companyLinks={this.state.companyLinks} summary = {this.state.summary}/>
      </>
    );
  }
}

export default App;
