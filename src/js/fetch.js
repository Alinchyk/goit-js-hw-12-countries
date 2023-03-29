const BASE_URL = "https://restcountries.com/v2";

function fetchCountry(countryName) {
  const url = `${BASE_URL}/name/${countryName}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => alert(error));
}

export default { fetchCountry };
