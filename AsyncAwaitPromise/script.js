"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

function getCountry(country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.official}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)} Million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    <p class="country__row"><span>💰</span>${data.currencies.CAD.name}</p>
  </div>
</article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
}

getCountry("canada");

// call back hell example
// setTimeout(() => {
//   console.log("1 Second passed");
//   setTimeout(() => {
//     console.log("2 Seconds passed");
//     setTimeout(() => {
//       console.log("3 Seconds passed");
//       setTimeout(() => {
//         console.log("4 Seconds passed");
//       }, 1000);
//       setTimeout(() => {
//         setTimeout(() => {
//           console.log("6 Seconds passed");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
