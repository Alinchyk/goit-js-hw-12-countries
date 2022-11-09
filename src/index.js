import "normalize.css";
import "./styles/main.scss";
import templateFunction from "./templates/countriesMarkup.hbs";
import templateList from "./templates/list.hbs";
import "./js/pnotify";
import { error } from "@pnotify/core";
import debounce from "lodash.debounce";
import API from "./js/fetch";
import getRefs from "./js/get-refs";

// змінні
const refs = getRefs();

// слухачі
refs.input.addEventListener("input", debounce(onInputSearch, 500));

// розмітка
function rederCountryCard(country) {
  const markup = templateFunction(country);
  refs.cardContainer.innerHTML = markup;
}

function renderCountryList(countryName) {
  const markup = templateList(countryName);
  refs.cardContainer.innerHTML = markup;
}

// пошук
function onInputSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;
  clearInput();

  API.fetchCountry(searchQuery)
    .then(isValidSearchQuery)
    .catch(itsError => {
      console.log(itsError);
    });

  // валідність
  function isValidSearchQuery(e) {
    if (e.length === 1) {
      rederCountryCard(e);
      return;
    } else if (e.length > 2 && e.length <= 10) {
      renderCountryList(e);
      return;
    }

    // помилка
    const itsError = error({
      text: "Too many matches found. Please enter a more specific query!",
    });
    return itsError;
  }
}

function clearInput() {
  refs.cardContainer.innerHTML = "";
}
