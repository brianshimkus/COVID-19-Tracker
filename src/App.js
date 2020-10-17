import { FormControl } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  // Use Effect runs a piece of code based on a given condition
  useEffect(() => {
    // async -> send a request, wait for it, do something with info
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
  }, [countries]);

  return (
    <div className="app">
      <div class="app__header">
        <h1>COVID 19 Tracker App</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* {Header} */}
      {/* {Title} */}

      {/* {InfoBoxs} */}
      {/* {InfoBoxs} */}
      {/* {InfoBoxs} */}

      {/* {Table} */}
      {/* {Graph} */}

      {/* {Map} */}
    </div>
  );
}

export default App;
