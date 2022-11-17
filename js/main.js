const card = document.querySelector(".wrapper");
const formi = document.getElementById("form");
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

// search function
{
  formi["form__input"].addEventListener("input", () => {
    const inputValue = formi["form__input"].value.toLowerCase();
    let name = document.querySelectorAll(".wrapper__heading");
    name.forEach((item) => {
      if (item.textContent.toLowerCase().includes(inputValue)) {
        item.parentElement.classList.remove("hidden");
      } else {
        item.parentElement.classList.add("hidden");
      }
    });
  });
}

// Modal

let box = document.querySelectorAll(".wrapper__card");

console.log(box);
