import { FormControl } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import InfoBox from './Components/InfoBox';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States
            value: country.countryInfo.iso2, // USA
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div class="app__header">
        <h1>COVID 19 Tracker App</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div class="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
        <InfoBox title="Recovered" cases={123} total={3000} />
        <InfoBox title="Deaths" cases={123} total={4000} />
      </div>

      {/* {Table} */}
      {/* {Graph} */}

      {/* {Map} */}
    </div>
  );
}

export default App;
