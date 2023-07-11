import axios from 'axios';

const getQuery = async (query) => {
  console.log(query);
  try {
    const response = await axios.get(query);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getQuery;
