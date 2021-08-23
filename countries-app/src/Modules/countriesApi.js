import axios from 'axios';

const host = 'https://restcountries.eu/rest/v2';

const getAllCountries = async () => {
  try {
    const response = await axios.get(host.concat('/all'));
    if (response.status === 200) return response.data;
    else console.error(`API responded with an error: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
};

export { getAllCountries };
