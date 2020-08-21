import axios from 'axios';

const url = 'https://covid-opo-backend.herokuapp.com';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}`;
  }

  try {
    const { data: { data, obitos, casosCurados, casosConfirmados } } = await axios.get(changeableUrl);

    return { data, obitos, casosCurados, casosConfirmados };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/casos`);

    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
