 
const { alert, notice, info, success, error } = require('@pnotify/core');
export default function fetchCountries(name) {
   return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
       .then(response => {
           if (!response.ok) {
               error({
                   text: "Error! Write correct name country!"
                  
               }); 
           }; 
           
           return response.json();   
    }
    )
};



