"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = (data) => {
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} Million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    </div>
  </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// function using promises
function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then(function (data) {
      renderCountry(data[0]);
      const neighbor = data[0]?.borders[0];
      // neighbour country
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data));
    });
}

getCountryData("usa");

function cmp() {
  return (
    <div>
      <h2>Retry</h2>
    </div>
  );
}
