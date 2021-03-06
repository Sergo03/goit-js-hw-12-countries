import './styles.css'
import countryCard from './templates/country-card.hbs'
var debounce = require('lodash.debounce');

const searchRef = document.querySelector('#js-search');
const containerRef = document.querySelector('.country-container')

searchRef.addEventListener('input', debounce(onSearch,500));


function onSearch(event) {
    
    const value = event.target.value;
    
    searchCountry(value)
        .then(renderCountry)
        .catch(error => console.log(error));
   
}

function searchCountry(name) {
   return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
        return response.json();
    }
    )
}

function renderCountry(country) {
    const markup = countryCard(country);
        containerRef.insertAdjacentHTML('beforeend', markup)
}