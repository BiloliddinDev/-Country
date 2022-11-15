// // Add html document tag
// const name1 = document.querySelector(".wrapper__heading");
// const img = document.querySelector(".wrapper__img");
// const text = document.querySelector(".wrapper__text");
// const price = document.querySelector(".wrapper__price");
// const data = document.querySelector(".wrapper__data");
const card = document.querySelector(".wrapper");
//add Api urel

const API2 = "https://restcountries.com/v3.1/all";

fetch(API2)
  .then((data) => {
    return data.json();
  })
  .then((data2) => {
    data2.map((item, i) => {
      card.innerHTML += `
      <div class="wrapper__card">
        <h2 class="wrapper__heading">${item.name.common}</h2>
        <img class="wrapper__img" src="${item.flags.png}" alt="" />
        <p class="wrapper__text"> Poytaxti ${item.capital}</p>
        <p class="wrapper__price">Fifa ${item.fifa}</p>
        <p class="wrapper__data"> Ahalsi ${item.population}</p>
        </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });
