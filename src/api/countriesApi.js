const COUNTRIES_BASE_URL = "https://ih-countries-api.herokuapp.com/countries/";

export const getAllCountries = async () => {
  return await fetch(COUNTRIES_BASE_URL).then((response) => response.json());
};

export const sortCountries = (countries) => {
  return [...countries].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });
};

export const getCountryByAlpha3Code = async (alpha3Code) => {
  return await fetch(`${COUNTRIES_BASE_URL}/${alpha3Code}`).then((response) =>
    response.json()
  );
};
