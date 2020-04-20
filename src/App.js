import React  from 'react'
// Components 
import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';

import covidImg from './images/covid19.png'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
    console.log('primero fetch', fetchedData);
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }

  
  render() { 

    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImg}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App;