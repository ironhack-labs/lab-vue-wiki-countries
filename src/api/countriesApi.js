export const getAllCountries = async () => {
  return await fetch("https://ih-countries-api.herokuapp.com/countries").then(
    (response) => response.json()
  );
};

export const sortCountries = (countries) => {
  return [...countries].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });
};

export const getCountryByAlpha3Code = async (alpha3Code) => {
  return [...(await getAllCountries())].filter(
    (c) => alpha3Code === c.alpha3Code
  )[0];
};
