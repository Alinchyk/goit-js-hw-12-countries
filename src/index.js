import "normalize.css";
import "./styles/main.scss";
import templateFunction from "./templates/countriesMarkup.hbs";
import templateList from "./templates/list.hbs";
import { onOutputInfo, onNoCountry } from "./js/pnotify";
import debounce from "lodash.debounce";
import API from "./js/fetch";
import getRefs from "./js/get-refs";

const refs = getRefs();

const rederCountryCard = function (country) {
  refs.cardContainer.innerHTML = templateFunction(country);
};

const renderCountryList = function (countryName) {
  refs.cardContainer.innerHTML = templateList(countryName);
};

const onInputSearch = function (e) {
  e.preventDefault();

  const searchQuery = e.target.value.trim();
  clearInput();

  API.fetchCountry(searchQuery)
    .then(isValidSearchQuery)
    .catch(error => alert(error));
};

const isValidSearchQuery = function (e) {
  if (e.length === 1) {
    rederCountryCard(e);
    return;
  } else if (e.length > 2 && e.length <= 10) {
    renderCountryList(e);
    return;
  } else if (e.length > 10) {
    return onOutputInfo();
  } else if (e.status === 404) {
    return onNoCountry();
  }
};

const clearInput = function () {
  refs.cardContainer.innerHTML = "";
};

refs.input.addEventListener("input", debounce(onInputSearch, 500));
