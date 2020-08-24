import React from 'react';

import { Cards, Chart } from './components';
import { fetchData, fetchDailyData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

import ReactGA from 'react-ga';
const trackingId = "UA-176066405-1";

class App extends React.Component {
  state = {
    data: {},
    allData: [],
    country: '',
  }

  async componentDidMount() {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
    const data = await fetchData();
    const allData = await fetchDailyData();
    this.setState({ data, allData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, allData } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        {/* <CountryPicker handleCountryChange={this.handleCountryChange} /> */}
        <Chart data={allData} /> 
      </div>
    );
  }
}

export default App;