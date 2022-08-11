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
