import"normalize.css";import"./styles/main.scss";import countriesMarkupTMPT from"./templates/countriesMarkup.hbs";import"./js/pnotify";import{error}from"@pnotify/core";import debounce from"lodash.debounce";import API from"./js/fetch";import getRefs from"./js/get-refs";const refs=getRefs();function rederCountryCard(r){const o=templateFunction(r);refs.cardContainer.innerHTML=o}