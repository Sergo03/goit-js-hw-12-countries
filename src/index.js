import './styles.css'
import fetchCountries from './js/fetchCountries'
import renderCountry from './js/renderCountry'

var debounce = require('lodash.debounce');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '../node_modules/@pnotify/core/dist/PNotify.css'
import '../node_modules/@pnotify/desktop/dist/PNotifyDesktop.css'
const { defaults } = require('@pnotify/core');
const { alert, notice, info, success, error } = require('@pnotify/core');
const searchRef = document.querySelector('#js-search');
searchRef.addEventListener('input', debounce(onSearch,500));


function onSearch(event) {
    const value = event.target.value;
    
    fetchCountries(value)
        .then(renderCountry)
        .catch(e => {
            notice({
            text: "Please!Write the name of the country! "
         })
        })
        .finally(() => {
           
        })
};



