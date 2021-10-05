import { useState } from 'react';

import Countries from '../components/Countries';
import Country from '../components/Country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);


  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVistedCountries = [...visitedCountries];

    const isCountryVisited = newVistedCountries.indexOf(countryId) !== -1;

    if(isCountryVisited) {
      newVistedCountries = newVistedCountries.filter(VisitedCountryId => VisitedCountryId !== countryId);
    } 
    else {
      newVistedCountries.push(countryId);
    }

    setVisitedCountries(newVistedCountries);
  }

  const countryFilterLowercase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries = countryFilterLowercase.length >= 3 ?
  allCountries.filter(({nameLowerCase}) => 
    nameLowerCase.includes(countryFilterLowercase)) : allCountries;

  return (
    <>
      <Header>React countries</Header>
      <Main>
        <TextInput
        id="inputCountryFilter" 
        labelDescription="Informe o nome do país: (pelo menos 3)" 
        inputValue={countryFilter}
        autoFocus
        onInputChange={handleCountryFilterChange}
        />

        <Countries>
        <h2 className='text-center font-semibold'>
          {filteredCountries.length} país(es)
        </h2>
        <h3 className='text-center font-semibold text-sm'>
          {visitedCountries.length} país(es) visitados
        </h3>
          {filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return <Country 
            isVisited={isVisited} 
            onCountryClick={toggleVisitedCountry} 
            key={country.id}>{country}
            </Country>;
          })
        }
        </Countries>

      </Main>

    </>
  )
}
