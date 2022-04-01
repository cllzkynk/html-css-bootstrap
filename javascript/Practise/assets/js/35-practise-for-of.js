import {countries} from "../data/countries.js";
let options = "";
for(let country of countries){
    console.log(country.name.common);
    options += `<option value="${country.cca2}">${country.name.common}</option>`;
}
document.querySelector("#ddlCountries").innerHTML = options;