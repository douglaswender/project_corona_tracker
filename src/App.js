import React from 'react';

import { Cards, Chart } from './components';
import { fetchData, fetchDailyData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    allData: [],
    country: '',
  }

  async componentDidMount() {
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