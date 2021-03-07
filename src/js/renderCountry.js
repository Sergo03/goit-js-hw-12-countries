import countryCard from '../templates/country-card.hbs'
import countryList from '../templates/country-list.hbs'
const { alert, notice, info, success, error } = require('@pnotify/core');
const containerRef = document.querySelector('.country-container')

export default function renderCountry(country) {
    
    if (country.length < 2) {
        
        
        const markup = countryCard(country);
        containerRef.insertAdjacentHTML('beforeend', markup)
        
    }
    if(country.length>10) {
       return error({
       text: "Too many matches found. Please enter a more specific query!"
    });
    } if (country.length > 2) {
        
        renderListCountry(country)
        
    }
}

function renderListCountry(list) {
        const markupList = countryList(list);
        containerRef.insertAdjacentHTML('beforeend',markupList)
    };