'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country){
const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v2/name/${country}`)
request.send()

request.addEventListener('load',function (){
    const data = JSON.parse(this.responseText)
    console.log(data[1]);

const html = `
<article class="country">
<img class="country__img" src="${data[1].flag}" />
<div class="country__data">
  <h3 class="country__name">${data[1].nativeName}</h3>
  <h4 class="country__region">${data[1].region}</h4>
  <p class="country__row"><span>👫</span>${data[1].population}</p>
  <p class="country__row"><span>🗣️</span>${data[1].languages[0].nativeName}</p>
  <p class="country__row"><span>💰</span>${data[1].currencies[0].name}</p>
</div>
</article>
`;
countriesContainer.insertAdjacentHTML('beforeend', html)
countriesContainer.style.opacity = 1
})}
getCountryData('India')
