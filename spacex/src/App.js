import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import FetchData from './service/FetchData';
import './style.css';
class App extends React.Component {
  fetchdata = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
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

  updateCompany = () => {
    this.fetchdata.getCompany().then((company) => this.setState({ company }));
  };

  render() {
    // console.log(this.state);
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Route exact path="/">
          {this.state.company && <Home company={this.state.company} />}
        </Route>
        <Route path="/rocket">
        <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        </Route>
        <Route path="/calendar">
          <Main/>
          <Calendar/>
        </Route>
        <Route path="/details">
          <Main/>
          <Details/>
        </Route>
        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    );
  }
}

export default App;
