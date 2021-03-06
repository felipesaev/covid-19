import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(()=> {
    const fetchAPI = async () => {
      setFetchedCountries( await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]);
  
  return (
    <div>
      <FormControl className={styles.container}>
        <NativeSelect defaultValue="" onChange={(event)=> (handleCountryChange(event.target.value))}>
          <option value="Global">Global</option>
          {fetchedCountries.map((country, indice) => 
            <option key={indice} value={country}>{country}</option>
          )}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
export default CountryPicker