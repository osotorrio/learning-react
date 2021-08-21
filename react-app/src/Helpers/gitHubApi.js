import axios from 'axios';

const host = 'https://api.github.com/users/';

const getRepos = async userName => {
  try {
    const response = await axios.get(host.concat(`${userName}/repos`));
    if (response.status === 200) return response.data;
    else console.error(`GitHub responded with an error: ${response.status}`);
  } catch (error) {
    console.error(error);
  }
};

export { getRepos };
